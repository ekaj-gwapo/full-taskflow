import { NextRequest, NextResponse } from "next/server"
import { Pool } from "pg"
import { requireAuth } from "@/lib/auth-utils"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string; stepId: string } }
) {
  const client = await pool.connect()
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const { completed } = await request.json()

    // Verify task and step exist
    const taskResult = await client.query(
      "SELECT * FROM tasks WHERE id = $1",
      [params.id]
    )

    if (taskResult.rows.length === 0) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    const task = taskResult.rows[0]

    // Employee can only update steps for their own tasks
    if (auth.user!.role === "EMPLOYEE" && task.assigneeId !== auth.user!.id) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    const result = await client.query(
      'UPDATE action_steps SET completed = $1, "updatedAt" = NOW() WHERE id = $2 RETURNING *',
      [completed || false, params.stepId]
    )

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Action step not found" }, { status: 404 })
    }

    return NextResponse.json(
      { message: "Action step updated successfully", actionStep: result.rows[0] },
      { status: 200 }
    )
  } catch (error) {
    console.error("Update action step error:", error)
    return NextResponse.json(
      { error: "Failed to update action step" },
      { status: 500 }
    )
  } finally {
    client.release()
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string; stepId: string } }
) {
  const client = await pool.connect()
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
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

    // Employee can only delete steps from their own tasks
    if (auth.user!.role === "EMPLOYEE" && task.assigneeId !== auth.user!.id) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    await client.query(
      "DELETE FROM action_steps WHERE id = $1",
      [params.stepId]
    )

    return NextResponse.json(
      { message: "Action step deleted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Delete action step error:", error)
    return NextResponse.json(
      { error: "Failed to delete action step" },
      { status: 500 }
    )
  } finally {
    client.release()
  }
}
