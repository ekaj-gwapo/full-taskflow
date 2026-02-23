import { NextRequest, NextResponse } from "next/server"
import { Pool } from "pg"
import { requireAuth, requireAdmin } from "@/lib/auth-utils"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const client = await pool.connect()
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const result = await client.query(
      "SELECT * FROM tasks WHERE id = $1",
      [params.id]
    )

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    const task = result.rows[0]

    // Check access: admin can view all, employee can only view their own
    if (auth.user!.role === "EMPLOYEE" && task.assigneeId !== auth.user!.id) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    return NextResponse.json({ task }, { status: 200 })
  } catch (error) {
    console.error("Get task error:", error)
    return NextResponse.json(
      { error: "Failed to fetch task" },
      { status: 500 }
    )
  } finally {
    client.release()
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const client = await pool.connect()
  try {
    const auth = requireAdmin(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const { status, priority } = await request.json()

    const result = await client.query(
      `UPDATE tasks SET status = $1, priority = $2, "completedAt" = CASE WHEN $3 THEN NOW() ELSE NULL END, "updatedAt" = NOW() WHERE id = $4 RETURNING *`,
      [status || null, priority || null, status === "COMPLETED", params.id]
    )

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    return NextResponse.json(
      { message: "Task updated successfully", task: result.rows[0] },
      { status: 200 }
    )
  } catch (error) {
    console.error("Update task error:", error)
    return NextResponse.json(
      { error: "Failed to update task" },
      { status: 500 }
    )
  } finally {
    client.release()
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const client = await pool.connect()
  try {
    const auth = requireAdmin(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const result = await client.query(
      "DELETE FROM tasks WHERE id = $1",
      [params.id]
    )

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
  } finally {
    client.release()
  }
}
