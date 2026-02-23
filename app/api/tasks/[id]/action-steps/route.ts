import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth-utils"

const prisma = new PrismaClient()

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const { title } = await request.json()

    if (!title) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      )
    }

    // Verify task exists and user can access it
    const task = await prisma.task.findUnique({
      where: { id: params.id },
    })

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    // Employee can only add steps to their own tasks
    if (auth.user!.role === "EMPLOYEE" && task.assigneeId !== auth.user!.id) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    const actionStep = await prisma.actionStep.create({
      data: {
        taskId: params.id,
        title,
      },
      include: {
        notes: true,
      },
    })

    return NextResponse.json(
      { message: "Action step created successfully", actionStep },
      { status: 201 }
    )
  } catch (error) {
    console.error("Create action step error:", error)
    return NextResponse.json(
      { error: "Failed to create action step" },
      { status: 500 }
    )
  }
}
