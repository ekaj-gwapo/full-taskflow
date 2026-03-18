import { NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth-utils"
import db from "@/lib/db"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const user = db.prepare(`
      SELECT id, name, email, phone, role, createdAt 
      FROM users 
      WHERE id = ?
    `).get(params.id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({ user }, { status: 200 })
  } catch (error) {
    console.error("Get user error:", error)
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    // Users can only update their own profile
    const role = auth.user!.role?.toUpperCase()
    if (auth.user!.id !== params.id && role !== "ADMIN" && role !== "SUPERADMIN") {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    const { name, phone } = await request.json()

    db.prepare(`
      UPDATE users 
      SET name = COALESCE(?, name), 
          phone = COALESCE(?, phone),
          updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(name, phone, params.id);

    const user = db.prepare(`
      SELECT id, name, email, phone, role 
      FROM users 
      WHERE id = ?
    `).get(params.id);

    return NextResponse.json(
      { message: "User profile updated successfully", user },
      { status: 200 }
    )
  } catch (error) {
    console.error("Update user error:", error)
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    )
  }
}
