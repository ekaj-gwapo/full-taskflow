import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "@/lib/db";
import { v4 as uuidv4 } from "uuid";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, role, phone } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await db.getOne("SELECT * FROM users WHERE email = $1", [email]);

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = uuidv4();

    // Insert user
    await db.execute(`
      INSERT INTO users (id, name, email, password, role, phone, createdAt, updatedAt)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `, [userId, name, email, hashedPassword, role || "EMPLOYEE", phone, new Date(), new Date()]);

    const user: any = await db.getOne("SELECT id, name, email, role, phone FROM users WHERE id = $1", [userId]);

    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name, role: user.role },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    return NextResponse.json({ user, token }, { status: 201 });
  } catch (error: any) {
    console.error("REGISTER ERROR:", error);
    return NextResponse.json({ error: "Failed to register", details: error.message }, { status: 500 });
  }
}
