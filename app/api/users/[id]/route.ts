import { NextRequest, NextResponse } from "next/server"
import { Pool } from "pg"
import { requireAuth } from "@/lib/auth-utils"

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
      "SELECT id, name, email, phone, location, role, \"createdAt\" FROM users WHERE id = $1",
      [params.id]
    )

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({ user: result.rows[0] }, { status: 200 })
  } catch (error) {
    console.error("Get user error:", error)
    return NextResponse.json(
      { error: "Failed to fetch user" },
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
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    // Users can only update their own profile
    if (auth.user!.id !== params.id && auth.user!.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    const { name, phone, location } = await request.json()

    const result = await client.query(
      'UPDATE users SET name = $1, phone = $2, location = $3, "updatedAt" = NOW() WHERE id = $4 RETURNING id, name, email, phone, location, role',
      [name || null, phone || null, location || null, params.id]
    )

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json(
      { message: "User profile updated successfully", user: result.rows[0] },
      { status: 200 }
    )
  } catch (error) {
    console.error("Update user error:", error)
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    )
  } finally {
    client.release()
  }
}
