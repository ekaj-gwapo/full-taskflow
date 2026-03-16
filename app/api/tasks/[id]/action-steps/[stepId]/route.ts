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
    const task: any = db.prepare("SELECT * FROM tasks WHERE id = ?").get(params.id);

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    // Employee can only update steps for their own tasks
    if (auth.user!.role === "EMPLOYEE" && task.assigneeId !== auth.user!.id) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    db.prepare(`
      UPDATE action_steps 
      SET completed = ?, 
          updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(completed ? 1 : 0, params.stepId);

    const actionStep = {
      ...db.prepare("SELECT * FROM action_steps WHERE id = ?").get(params.stepId) as any,
      notes: db.prepare("SELECT * FROM step_notes WHERE stepId = ?").all(params.stepId)
    };

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
    const task: any = db.prepare("SELECT * FROM tasks WHERE id = ?").get(params.id);

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

    db.prepare("DELETE FROM action_steps WHERE id = ?").run(params.stepId);

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
