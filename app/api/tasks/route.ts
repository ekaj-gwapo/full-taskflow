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
    const role = user.role.toUpperCase()

    let tasks: any[]
    if (role === "ADMIN" || role === "SUPERADMIN") {
      tasks = await db.getAll(`
        SELECT t.*, 
               u1.name as assigneeName, u1.email as assigneeEmail, u1.role as assigneeRole,
               u2.name as creatorName, u2.email as creatorEmail, u2.role as creatorRole
        FROM tasks t
        LEFT JOIN users u1 ON t.assigneeId = u1.id
        LEFT JOIN users u2 ON t.createdById = u2.id
        ORDER BY t.createdAt DESC
      `)
    } else {
      tasks = await db.getAll(`
        SELECT t.*, 
               u1.name as assigneeName, u1.email as assigneeEmail, u1.role as assigneeRole,
               u2.name as creatorName, u2.email as creatorEmail, u2.role as creatorRole
        FROM tasks t
        LEFT JOIN users u1 ON t.assigneeId = u1.id
        LEFT JOIN users u2 ON t.createdById = u2.id
        WHERE t.assigneeId = $1
        ORDER BY t.createdAt DESC
      `, [user.id])
    }

    // Format tasks to match expected structure
    const formattedTasks = await Promise.all(tasks.map(async (t) => {
      const actionSteps = await db.getAll("SELECT * FROM action_steps WHERE taskId = $1", [t.id])
      const actionStepsWithNotes = await Promise.all(actionSteps.map(async (as: any) => ({
        ...as,
        notes: await db.getAll("SELECT * FROM step_notes WHERE stepId = $1", [as.id])
      })))
      const progressNotes = await db.getAll("SELECT * FROM progress_notes WHERE taskId = $1", [t.id])

      return {
        ...t,
        status: t.status ? t.status.toLowerCase().replace('_', '-') : 'todo',
        assignee: t.assigneeId ? { id: t.assigneeId, name: t.assigneeName, email: t.assigneeEmail, role: t.assigneeRole } : null,
        createdBy: t.createdById ? { id: t.createdById, name: t.creatorName, email: t.creatorEmail, role: t.creatorRole } : null,
        actionSteps: actionStepsWithNotes,
        progressNotes
      }
    }))

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
  try {
    const auth = requireAdmin(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const { title, description, priority, dueDate, assigneeId, actionSteps } = await request.json()

    if (!title || !assigneeId || !dueDate) {
      return NextResponse.json(
        { error: "Title, assigneeId, and dueDate are required" },
        { status: 400 }
      )
    }

    const taskId = uuidv4()
    
    // Insert task
    await db.execute(`
      INSERT INTO tasks (id, title, description, priority, dueDate, assigneeId, createdById, status, createdAt, updatedAt)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `, [taskId, title, description, priority || "MEDIUM", new Date(dueDate).toISOString(), assigneeId, auth.user!.id, "TODO", new Date(), new Date()])

    // Insert action steps if provided
    if (actionSteps && actionSteps.length > 0) {
      for (const stepTitle of actionSteps) {
        const stepId = uuidv4()
        await db.execute(`
          INSERT INTO action_steps (id, title, taskId, completed, createdAt, updatedAt)
          VALUES ($1, $2, $3, $4, $5, $6)
        `, [stepId, stepTitle, taskId, false, new Date(), new Date()])
      }
    }

    // Fetch the created task to return it
    const task: any = await db.getOne(`
      SELECT t.*, 
             u1.name as assigneeName, u1.email as assigneeEmail, u1.role as assigneeRole,
             u2.name as creatorName, u2.email as creatorEmail, u2.role as creatorRole
      FROM tasks t
      LEFT JOIN users u1 ON t.assigneeId = u1.id
      LEFT JOIN users u2 ON t.createdById = u2.id
      WHERE t.id = $1
    `, [taskId])

    const actionStepsData = await db.getAll("SELECT * FROM action_steps WHERE taskId = $1", [taskId])
    const actionStepsWithNotes = await Promise.all(actionStepsData.map(async (as: any) => ({
      ...as,
      notes: await db.getAll("SELECT * FROM step_notes WHERE stepId = $1", [as.id])
    })))

    const formattedTask = {
      ...task,
      status: task.status ? task.status.toLowerCase().replace('_', '-') : 'todo',
      assignee: task.assigneeId ? { id: task.assigneeId, name: task.assigneeName, email: task.assigneeEmail, role: task.assigneeRole } : null,
      createdBy: task.createdById ? { id: task.createdById, name: task.creatorName, email: task.creatorEmail, role: task.creatorRole } : null,
      actionSteps: actionStepsWithNotes,
      progressNotes: []
    }

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
