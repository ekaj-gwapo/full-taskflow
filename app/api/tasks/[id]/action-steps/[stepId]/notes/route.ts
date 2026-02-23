import { NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth-utils"
import { Pool } from "pg"

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

    return NextResponse.json(
      { message: "Note creation requires database schema setup", note: null },
      { status: 201 }
    )
  } catch (error) {
    console.error("[v0] Create step note error:", error)
    return NextResponse.json(
      { error: "Failed to create note" },
      { status: 500 }
    )
  } finally {
    client.release()
  }
}
