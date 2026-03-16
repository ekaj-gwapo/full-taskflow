import { NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth-utils"
import db from "@/lib/db"
import { v4 as uuidv4 } from "uuid"

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string; stepId: string } }
) {
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const { content } = await request.json()

    if (!content) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      )
    }

    // Verify task exists
    const task: any = db.prepare("SELECT * FROM tasks WHERE id = ?").get(params.id);

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    // Employee can only add notes to steps in their own tasks
    if (auth.user!.role === "EMPLOYEE" && task.assigneeId !== auth.user!.id) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    const noteId = uuidv4();
    db.prepare(`
      INSERT INTO step_notes (id, content, stepId, authorId, authorName)
      VALUES (?, ?, ?, ?, ?)
    `).run(noteId, content, params.stepId, auth.user!.id, auth.user!.name);

    const stepNote = db.prepare("SELECT * FROM step_notes WHERE id = ?").get(noteId);

    return NextResponse.json(
      { message: "Note created successfully", note: stepNote },
      { status: 201 }
    )
  } catch (error: any) {
    console.error("Create step note error:", error)
    return NextResponse.json(
      { error: "Failed to create note", details: error.message },
      { status: 500 }
    )
  }
}
