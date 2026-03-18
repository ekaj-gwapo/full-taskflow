import { NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth-utils"
import db from "@/lib/db"

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string; stepId: string } }
) {
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const { completed } = await request.json()

    // Verify task exists
    const task: any = await db.getOne("SELECT * FROM tasks WHERE id = $1", [params.id])

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    // Employee can only update steps for their own tasks
    const role = auth.user!.role?.toUpperCase()
    if (role === "EMPLOYEE" && task.assigneeId !== auth.user!.id) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    await db.execute(`
      UPDATE action_steps 
      SET completed = $1,
          updatedAt = $2
      WHERE id = $3
    `, [completed ? true : false, new Date(), params.stepId])

    const step = await db.getOne("SELECT * FROM action_steps WHERE id = $1", [params.stepId])
    const notes = await db.getAll("SELECT * FROM step_notes WHERE stepId = $1", [params.stepId])
    const actionStep = {
      ...step,
      notes
    }

    return NextResponse.json(
      { message: "Action step updated successfully", actionStep },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Update action step error:", error)
    return NextResponse.json(
      { error: "Failed to update action step", details: error.message },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string; stepId: string } }
) {
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    // Verify task exists
    const task: any = await db.getOne("SELECT * FROM tasks WHERE id = $1", [params.id])

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    // Only ADMIN or SUPERADMIN can delete steps
    const role = auth.user!.role?.toUpperCase();
    if (role !== "ADMIN" && role !== "SUPERADMIN") {
      return NextResponse.json(
        { error: "Only administrators can delete action steps" },
        { status: 403 }
      )
    }

    await db.execute("DELETE FROM action_steps WHERE id = $1", [params.stepId])

    return NextResponse.json(
      { message: "Action step deleted successfully" },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Delete action step error:", error)
    return NextResponse.json(
      { error: "Failed to delete action step", details: error.message },
      { status: 500 }
    )
  }
}
