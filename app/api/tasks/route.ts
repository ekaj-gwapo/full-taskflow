import { NextRequest, NextResponse } from "next/server"
import { requireAuth, requireAdmin } from "@/lib/auth-utils"
import db from "@/lib/db"
import { v4 as uuidv4 } from "uuid"

export async function GET(request: NextRequest) {
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const user = auth.user!

    let tasks: any[]
    if (user.role === "ADMIN") {
      tasks = db.prepare(`
        SELECT t.*, 
               u1.name as assigneeName, u1.email as assigneeEmail, u1.role as assigneeRole,
               u2.name as creatorName, u2.email as creatorEmail, u2.role as creatorRole
        FROM tasks t
        LEFT JOIN users u1 ON t.assigneeId = u1.id
        LEFT JOIN users u2 ON t.createdById = u2.id
        ORDER BY t.createdAt DESC
      `).all();
    } else {
      tasks = db.prepare(`
        SELECT t.*, 
               u1.name as assigneeName, u1.email as assigneeEmail, u1.role as assigneeRole,
               u2.name as creatorName, u2.email as creatorEmail, u2.role as creatorRole
        FROM tasks t
        LEFT JOIN users u1 ON t.assigneeId = u1.id
        LEFT JOIN users u2 ON t.createdById = u2.id
        WHERE t.assigneeId = ?
        ORDER BY t.createdAt DESC
      `).all(user.id);
    }

    // Format tasks to match expected structure
    const formattedTasks = tasks.map(t => ({
      ...t,
      assignee: t.assigneeId ? { id: t.assigneeId, name: t.assigneeName, email: t.assigneeEmail, role: t.assigneeRole } : null,
      createdBy: t.createdById ? { id: t.createdById, name: t.creatorName, email: t.creatorEmail, role: t.creatorRole } : null,
      actionSteps: db.prepare("SELECT * FROM action_steps WHERE taskId = ?").all(t.id).map((as: any) => ({
        ...as,
        notes: db.prepare("SELECT * FROM step_notes WHERE stepId = ?").all(as.id)
      })),
      progressNotes: db.prepare("SELECT * FROM progress_notes WHERE taskId = ?").all(t.id)
    }));

    return NextResponse.json({ tasks: formattedTasks }, { status: 200 })
  } catch (error) {
    console.error("Get tasks error:", error)
    return NextResponse.json(
      { error: "Failed to fetch tasks" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  const transaction = db.transaction((data: any) => {
    const { title, description, priority, dueDate, assigneeId, actionSteps, createdById } = data;
    const taskId = uuidv4();
    
    db.prepare(`
      INSERT INTO tasks (id, title, description, priority, dueDate, assigneeId, createdById)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(taskId, title, description, priority || "MEDIUM", dueDate, assigneeId, createdById);

    if (actionSteps && actionSteps.length > 0) {
      const insertStep = db.prepare(`
        INSERT INTO action_steps (id, title, taskId)
        VALUES (?, ?, ?)
      `);
      for (const stepTitle of actionSteps) {
        insertStep.run(uuidv4(), stepTitle, taskId);
      }
    }

    return taskId;
  });

  try {
    const auth = requireAdmin(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const { title, description, priority, dueDate, assigneeId, actionSteps } =
      await request.json()

    if (!title || !assigneeId || !dueDate) {
      return NextResponse.json(
        { error: "Title, assigneeId, and dueDate are required" },
        { status: 400 }
      )
    }

    const taskId = transaction({
      title,
      description,
      priority,
      dueDate: new Date(dueDate).toISOString(),
      assigneeId,
      createdById: auth.user!.id,
      actionSteps
    });

    // Fetch the created task to return it
    const task: any = db.prepare(`
        SELECT t.*, 
               u1.name as assigneeName, u1.email as assigneeEmail, u1.role as assigneeRole,
               u2.name as creatorName, u2.email as creatorEmail, u2.role as creatorRole
        FROM tasks t
        LEFT JOIN users u1 ON t.assigneeId = u1.id
        LEFT JOIN users u2 ON t.createdById = u2.id
        WHERE t.id = ?
      `).get(taskId);

    const formattedTask = {
      ...task,
      assignee: task.assigneeId ? { id: task.assigneeId, name: task.assigneeName, email: task.assigneeEmail, role: task.assigneeRole } : null,
      createdBy: task.createdById ? { id: task.createdById, name: task.creatorName, email: task.creatorEmail, role: task.creatorRole } : null,
      actionSteps: db.prepare("SELECT * FROM action_steps WHERE taskId = ?").all(taskId).map((as: any) => ({
        ...as,
        notes: db.prepare("SELECT * FROM step_notes WHERE stepId = ?").all(as.id)
      })),
      progressNotes: []
    };

    return NextResponse.json(
      { message: "Task created successfully", task: formattedTask },
      { status: 201 }
    )
  } catch (error) {
    console.error("Create task error:", error)
    return NextResponse.json(
      { error: "Failed to create task" },
      { status: 500 }
    )
  }
}
