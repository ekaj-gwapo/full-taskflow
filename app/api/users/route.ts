import { NextRequest, NextResponse } from "next/server"
import { requireAdmin } from "@/lib/auth-utils"
import { Pool } from "pg"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function GET(request: NextRequest) {
  const client = await pool.connect()
  try {
    const auth = requireAdmin(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const result = await client.query(
      "SELECT id, name, email, role, createdAt FROM neon_auth.user ORDER BY createdAt DESC"
    )

    return NextResponse.json({ users: result.rows }, { status: 200 })
  } catch (error) {
    console.error("[v0] Get users error:", error)
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    )
  } finally {
    client.release()
  }
}
