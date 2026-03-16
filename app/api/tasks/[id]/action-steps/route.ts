import { NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth-utils"
import db from "@/lib/db"
import { v4 as uuidv4 } from "uuid"

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const { title } = await request.json()

    if (!title) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      )
    }

    // Verify task exists and user can access it
    const task: any = db.prepare("SELECT * FROM tasks WHERE id = ?").get(params.id);

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    // Employee can only add steps to their own tasks
    if (auth.user!.role === "EMPLOYEE" && task.assigneeId !== auth.user!.id) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    const stepId = uuidv4();
    db.prepare(`
      INSERT INTO action_steps (id, title, taskId)
      VALUES (?, ?, ?)
    `).run(stepId, title, params.id);

    const actionStep = {
      ...db.prepare("SELECT * FROM action_steps WHERE id = ?").get(stepId) as any,
      notes: []
    };

    return NextResponse.json(
      { message: "Action step created successfully", actionStep },
      { status: 201 }
    )
  } catch (error: any) {
    console.error("Create action step error:", error)
    return NextResponse.json(
      { error: "Failed to create action step", details: error.message },
      { status: 500 }
    )
  }
}
