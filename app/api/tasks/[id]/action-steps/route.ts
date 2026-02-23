import { NextRequest, NextResponse } from "next/server"
import { Pool } from "pg"
import { requireAuth } from "@/lib/auth-utils"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const client = await pool.connect()
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
    const taskResult = await client.query(
      "SELECT * FROM tasks WHERE id = $1",
      [params.id]
    )

    if (taskResult.rows.length === 0) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    const task = taskResult.rows[0]

    // Employee can only add steps to their own tasks
    if (auth.user!.role === "EMPLOYEE" && task.assigneeId !== auth.user!.id) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    const result = await client.query(
      `INSERT INTO action_steps (id, "taskId", title, "createdAt", "updatedAt")
       VALUES (gen_random_uuid(), $1, $2, NOW(), NOW())
       RETURNING *`,
      [params.id, title]
    )

    return NextResponse.json(
      { message: "Action step created successfully", actionStep: result.rows[0] },
      { status: 201 }
    )
  } catch (error) {
    console.error("Create action step error:", error)
    return NextResponse.json(
      { error: "Failed to create action step" },
      { status: 500 }
    )
  } finally {
    client.release()
  }
}
