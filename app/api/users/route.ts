import { NextRequest, NextResponse } from "next/server"
import { requireAdmin } from "@/lib/auth-utils"
import db from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const auth = requireAdmin(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const users = await db.getAll(`
      SELECT id, name, email, phone, role, createdAt 
      FROM users
    `)

    return NextResponse.json({ users }, { status: 200 })
  } catch (error) {
    console.error("Get users error:", error)
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    )
  }
}
