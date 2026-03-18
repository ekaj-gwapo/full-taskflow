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

    const { content } = await request.json()

    if (!content) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      )
    }

    // Verify task exists and user has access
    const task: any = db.prepare("SELECT * FROM tasks WHERE id = ?").get(params.id);

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    // Permission check: admins/superadmins can add to any, employee only to their own
    const role = auth.user!.role?.toUpperCase()
    if (role === "EMPLOYEE" && task.assigneeId !== auth.user!.id) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    const noteId = uuidv4();
    db.prepare(`
      INSERT INTO progress_notes (id, content, taskId, authorId, authorName)
      VALUES (?, ?, ?, ?, ?)
    `).run(noteId, content, params.id, auth.user!.id, auth.user!.name);

    const progressNote = db.prepare("SELECT * FROM progress_notes WHERE id = ?").get(noteId);

    return NextResponse.json(
      { message: "Progress note created successfully", note: progressNote },
      { status: 201 }
    )
  } catch (error: any) {
    console.error("Create progress note error:", error)
    return NextResponse.json(
      { error: "Failed to create progress note", details: error.message },
      { status: 500 }
    )
  }
}
