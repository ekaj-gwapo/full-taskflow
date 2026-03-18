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

    const task: any = await db.getOne(`
      SELECT t.*, 
             u1.name as assigneeName, u1.email as assigneeEmail, u1.role as assigneeRole,
             u2.name as creatorName, u2.email as creatorEmail, u2.role as creatorRole
      FROM tasks t
      LEFT JOIN users u1 ON t.assigneeId = u1.id
      LEFT JOIN users u2 ON t.createdById = u2.id
      WHERE t.id = $1
    `, [params.id])

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

    const actionSteps = await db.getAll("SELECT * FROM action_steps WHERE taskId = $1", [params.id])
    const actionStepsWithNotes = await Promise.all(actionSteps.map(async (as: any) => ({
      ...as,
      notes: await db.getAll("SELECT * FROM step_notes WHERE stepId = $1", [as.id])
    })))
    const progressNotes = await db.getAll("SELECT * FROM progress_notes WHERE taskId = $1", [params.id])

    const formattedTask = {
      ...task,
      status: task.status ? task.status.toLowerCase().replace('_', '-') : 'todo',
      assignee: task.assigneeId ? { id: task.assigneeId, name: task.assigneeName, email: task.assigneeEmail, role: task.assigneeRole } : null,
      createdBy: task.createdById ? { id: task.createdById, name: task.creatorName, email: task.creatorEmail, role: task.creatorRole } : null,
      actionSteps: actionStepsWithNotes,
      progressNotes
    }

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
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const { status, priority } = await request.json()
    
    // Fetch task to check ownership
    const existingTask: any = await db.getOne("SELECT * FROM tasks WHERE id = $1", [params.id])
    if (!existingTask) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    // Permission check:
    // ADMIN/SUPERADMIN can update anything
    // EMPLOYEE can only update status if they are the assignee
    const role = auth.user!.role.toUpperCase()
    if (role === "EMPLOYEE") {
      if (existingTask.assigneeId !== auth.user!.id) {
        return NextResponse.json({ error: "Access denied" }, { status: 403 })
      }
      
      // Employees can only update status
      if (priority !== undefined && priority !== existingTask.priority) {
        return NextResponse.json({ error: "Employees cannot update priority" }, { status: 403 })
      }
    }

    const dbStatus = status ? status.toUpperCase().replace('-', '_') : null
    let completedAt = null
    
    // Logic for completedAt:
    // 1. If moving to COMPLETED, set to now
    // 2. If moving FROM COMPLETED to something else, clear it (null)
    // 3. Otherwise, keep existing
    if (dbStatus === "COMPLETED") {
      completedAt = new Date().toISOString()
    } else if (dbStatus && existingTask.status === "COMPLETED") {
      completedAt = null
    } else {
      completedAt = existingTask.completedAt
    }

    await db.execute(`
      UPDATE tasks 
      SET status = COALESCE($1, status), 
          priority = COALESCE($2, priority),
          completedAt = COALESCE($3, completedAt),
          updatedAt = $4
      WHERE id = $5
    `, [dbStatus, priority ? priority.toUpperCase() : null, completedAt, new Date(), params.id])

    // Fetch updated task
    const task: any = await db.getOne(`
      SELECT t.*, 
             u1.name as assigneeName, u1.email as assigneeEmail, u1.role as assigneeRole,
             u2.name as creatorName, u2.email as creatorEmail, u2.role as creatorRole
      FROM tasks t
      LEFT JOIN users u1 ON t.assigneeId = u1.id
      LEFT JOIN users u2 ON t.createdById = u2.id
      WHERE t.id = $1
    `, [params.id])

    const actionSteps = await db.getAll("SELECT * FROM action_steps WHERE taskId = $1", [params.id])
    const actionStepsWithNotes = await Promise.all(actionSteps.map(async (as: any) => ({
      ...as,
      notes: await db.getAll("SELECT * FROM step_notes WHERE stepId = $1", [as.id])
    })))
    const progressNotes = await db.getAll("SELECT * FROM progress_notes WHERE taskId = $1", [params.id])

    const formattedTask = {
      ...task,
      status: task.status ? task.status.toLowerCase().replace('_', '-') : 'todo',
      assignee: task.assigneeId ? { id: task.assigneeId, name: task.assigneeName, email: task.assigneeEmail, role: task.assigneeRole } : null,
      createdBy: task.createdById ? { id: task.createdById, name: task.creatorName, email: task.creatorEmail, role: task.creatorRole } : null,
      actionSteps: actionStepsWithNotes,
      progressNotes
    }

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

    await db.execute("DELETE FROM tasks WHERE id = $1", [params.id])

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
