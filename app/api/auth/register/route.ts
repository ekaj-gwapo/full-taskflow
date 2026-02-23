import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
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
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user and account in transaction
    const user = await prisma.user.create({
      data: {
        email,
        name,
        role: "user",
        emailVerified: false,
        accounts: {
          create: {
            providerId: "password",
            password: hashedPassword,
            accountId: email,
          },
        },
      },
      include: {
        accounts: false,
      },
    })

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
  } catch (error) {
    console.error("[v0] Registration error:", error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error("[v0] Error details:", errorMessage)
    return NextResponse.json(
      { error: "Failed to register user", details: errorMessage },
      { status: 500 }
    )
  }
}
