import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth-utils"

const prisma = new PrismaClient()

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string; stepId: string } }
) {
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

    // Verify task exists
    const task = await prisma.task.findUnique({
      where: { id: params.id },
    })

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    // Employee can only add notes to steps in their own tasks
    if (auth.user!.role === "EMPLOYEE" && task.assigneeId !== auth.user!.id) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    const stepNote = await prisma.stepNote.create({
      data: {
        stepId: params.stepId,
        content,
        authorName: "Employee", // This will be replaced with actual user data
        authorId: auth.user!.id,
      },
    })

    return NextResponse.json(
      { message: "Note created successfully", note: stepNote },
      { status: 201 }
    )
  } catch (error) {
    console.error("Create step note error:", error)
    return NextResponse.json(
      { error: "Failed to create note" },
      { status: 500 }
    )
  }
}
