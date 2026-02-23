import { NextRequest, NextResponse } from "next/server"
import { Pool } from "pg"
import { requireAuth, requireAdmin } from "@/lib/auth-utils"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function GET(request: NextRequest) {
  const client = await pool.connect()
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const user = auth.user!

    let query = "SELECT * FROM tasks ORDER BY \"createdAt\" DESC"
    const params: any[] = []

    if (user.role !== "ADMIN") {
      query = "SELECT * FROM tasks WHERE \"assigneeId\" = $1 ORDER BY \"createdAt\" DESC"
      params.push(user.id)
    }

    const result = await client.query(query, params)

    return NextResponse.json({ tasks: result.rows }, { status: 200 })
  } catch (error) {
    console.error("Get tasks error:", error)
    return NextResponse.json(
      { error: "Failed to fetch tasks" },
      { status: 500 }
    )
  } finally {
    client.release()
  }
}

export async function POST(request: NextRequest) {
  const client = await pool.connect()
  try {
    const auth = requireAdmin(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const { title, description, priority, dueDate, assigneeId } =
      await request.json()

    if (!title || !assigneeId || !dueDate) {
      return NextResponse.json(
        { error: "Title, assigneeId, and dueDate are required" },
        { status: 400 }
      )
    }

    const result = await client.query(
      `INSERT INTO tasks (id, title, description, priority, "dueDate", "assigneeId", "createdById", "createdAt", "updatedAt")
       VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, NOW(), NOW())
       RETURNING *`,
      [title, description || null, priority || "MEDIUM", dueDate, assigneeId, auth.user!.id]
    )

    return NextResponse.json(
      { message: "Task created successfully", task: result.rows[0] },
      { status: 201 }
    )
  } catch (error) {
    console.error("Create task error:", error)
    return NextResponse.json(
      { error: "Failed to create task" },
      { status: 500 }
    )
  } finally {
    client.release()
  }
}
