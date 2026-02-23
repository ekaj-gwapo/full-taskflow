import { NextRequest, NextResponse } from "next/server"
import { Pool } from "pg"
import { requireAuth } from "@/lib/auth-utils"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string; stepId: string } }
) {
  const client = await pool.connect()
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
    const taskResult = await client.query(
      "SELECT * FROM tasks WHERE id = $1",
      [params.id]
    )

    if (taskResult.rows.length === 0) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    const task = taskResult.rows[0]

    // Employee can only add notes to steps in their own tasks
    if (auth.user!.role === "EMPLOYEE" && task.assigneeId !== auth.user!.id) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    const result = await client.query(
      `INSERT INTO step_notes (id, "stepId", content, "authorName", "authorId", timestamp)
       VALUES (gen_random_uuid(), $1, $2, $3, $4, NOW())
       RETURNING *`,
      [params.stepId, content, auth.user!.name || "Employee", auth.user!.id]
    )

    return NextResponse.json(
      { message: "Note created successfully", note: result.rows[0] },
      { status: 201 }
    )
  } catch (error) {
    console.error("Create step note error:", error)
    return NextResponse.json(
      { error: "Failed to create note" },
      { status: 500 }
    )
  } finally {
    client.release()
  }
}
