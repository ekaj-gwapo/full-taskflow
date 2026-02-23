import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server"
import { Pool } from "pg"

// Create a connection pool for Neon
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function POST(request: NextRequest) {
  const client = await pool.connect()
  
  try {
    const { name, email, password } = await request.json()

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUserResult = await client.query(
      "SELECT id FROM neon_auth.user WHERE email = $1",
      [email]
    )

    if (existingUserResult.rows.length > 0) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user in transaction
    await client.query("BEGIN")

    try {
      // Create user first
      const createUserResult = await client.query(
        `INSERT INTO neon_auth.user (id, name, email, role, emailVerified, createdAt, updatedAt)
         VALUES (gen_random_uuid(), $1, $2, $3, $4, NOW(), NOW())
         RETURNING id, name, email, role`,
        [name, email, "user", false]
      )

      const user = createUserResult.rows[0]

      // Create account with password for this user
      await client.query(
        `INSERT INTO neon_auth.account (id, userId, providerId, accountId, password, createdAt, updatedAt)
         VALUES (gen_random_uuid(), $1, 'password', $2, $3, NOW(), NOW())`,
        [user.id, email, hashedPassword]
      )

      await client.query("COMMIT")

      // Generate JWT token
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "7d" }
      )

      return NextResponse.json(
        {
          message: "User registered successfully",
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        },
        { status: 201 }
      )
    } catch (txError) {
      await client.query("ROLLBACK")
      throw txError
    }
  } catch (error) {
    console.error("[v0] Registration error:", error)
    console.error("[v0] Error details:", error instanceof Error ? error.message : String(error))
    return NextResponse.json(
      { error: "Failed to register user", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  } finally {
    client.release()
  }
}
