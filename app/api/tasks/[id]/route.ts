import { NextRequest, NextResponse } from "next/server"
import { requireAuth, requireAdmin } from "@/lib/auth-utils"
import db from "@/lib/db"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const task: any = db.prepare(`
        SELECT t.*, 
               u1.name as assigneeName, u1.email as assigneeEmail, u1.role as assigneeRole,
               u2.name as creatorName, u2.email as creatorEmail, u2.role as creatorRole
        FROM tasks t
        LEFT JOIN users u1 ON t.assigneeId = u1.id
        LEFT JOIN users u2 ON t.createdById = u2.id
        WHERE t.id = ?
      `).get(params.id);

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    // Check access: admin can view all, employee can only view their own
    if (auth.user!.role === "EMPLOYEE" && task.assigneeId !== auth.user!.id) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    const formattedTask = {
      ...task,
      assignee: task.assigneeId ? { id: task.assigneeId, name: task.assigneeName, email: task.assigneeEmail, role: task.assigneeRole } : null,
      createdBy: task.createdById ? { id: task.createdById, name: task.creatorName, email: task.creatorEmail, role: task.creatorRole } : null,
      actionSteps: db.prepare("SELECT * FROM action_steps WHERE taskId = ?").all(params.id).map((as: any) => ({
        ...as,
        notes: db.prepare("SELECT * FROM step_notes WHERE stepId = ?").all(as.id)
      })),
      progressNotes: db.prepare("SELECT * FROM progress_notes WHERE taskId = ?").all(params.id)
    };

    return NextResponse.json({ task: formattedTask }, { status: 200 })
  } catch (error) {
    console.error("Get task error:", error)
    return NextResponse.json(
      { error: "Failed to fetch task" },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const auth = requireAdmin(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const { status, priority } = await request.json()
    const completedAt = status === "COMPLETED" ? new Date().toISOString() : null;

    db.prepare(`
      UPDATE tasks 
      SET status = COALESCE(?, status), 
          priority = COALESCE(?, priority),
          updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(status, priority, params.id);

    // Fetch updated task
    const task: any = db.prepare(`
        SELECT t.*, 
               u1.name as assigneeName, u1.email as assigneeEmail, u1.role as assigneeRole,
               u2.name as creatorName, u2.email as creatorEmail, u2.role as creatorRole
        FROM tasks t
        LEFT JOIN users u1 ON t.assigneeId = u1.id
        LEFT JOIN users u2 ON t.createdById = u2.id
        WHERE t.id = ?
      `).get(params.id);

    const formattedTask = {
      ...task,
      assignee: task.assigneeId ? { id: task.assigneeId, name: task.assigneeName, email: task.assigneeEmail, role: task.assigneeRole } : null,
      createdBy: task.createdById ? { id: task.createdById, name: task.creatorName, email: task.creatorEmail, role: task.creatorRole } : null,
      actionSteps: db.prepare("SELECT * FROM action_steps WHERE taskId = ?").all(params.id).map((as: any) => ({
        ...as,
        notes: db.prepare("SELECT * FROM step_notes WHERE stepId = ?").all(as.id)
      })),
      progressNotes: db.prepare("SELECT * FROM progress_notes WHERE taskId = ?").all(params.id)
    };

    return NextResponse.json(
      { message: "Task updated successfully", task: formattedTask },
      { status: 200 }
    )
  } catch (error) {
    console.error("Update task error:", error)
    return NextResponse.json(
      { error: "Failed to update task" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const auth = requireAdmin(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    db.prepare("DELETE FROM tasks WHERE id = ?").run(params.id);

    return NextResponse.json(
      { message: "Task deleted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Delete task error:", error)
    return NextResponse.json(
      { error: "Failed to delete task" },
      { status: 500 }
    )
  }
}
