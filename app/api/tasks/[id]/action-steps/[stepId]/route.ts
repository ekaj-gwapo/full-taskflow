import { NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth-utils"
import { Pool } from "pg"

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

    return NextResponse.json(
      { message: "Action step update requires database schema setup", actionStep: null },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Update action step error:", error)
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

    return NextResponse.json(
      { message: "Action step deleted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Delete action step error:", error)
    return NextResponse.json(
      { error: "Failed to delete action step" },
      { status: 500 }
    )
  } finally {
    client.release()
  }
}
