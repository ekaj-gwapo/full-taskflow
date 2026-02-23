import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import { requireAuth, requireAdmin } from "@/lib/auth-utils"

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const user = auth.user!

    let tasks
    if (user.role === "ADMIN") {
      // Admin sees all tasks
      tasks = await prisma.task.findMany({
        include: {
          assignee: true,
          createdBy: true,
          actionSteps: {
            include: {
              notes: true,
            },
          },
          progressNotes: true,
        },
        orderBy: { createdAt: "desc" },
      })
    } else {
      // Employee sees only their assigned tasks
      tasks = await prisma.task.findMany({
        where: { assigneeId: user.id },
        include: {
          assignee: true,
          createdBy: true,
          actionSteps: {
            include: {
              notes: true,
            },
          },
          progressNotes: true,
        },
        orderBy: { createdAt: "desc" },
      })
    }

    return NextResponse.json({ tasks }, { status: 200 })
  } catch (error) {
    console.error("Get tasks error:", error)
    return NextResponse.json(
      { error: "Failed to fetch tasks" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = requireAdmin(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const { title, description, priority, dueDate, assigneeId, actionSteps } =
      await request.json()

    if (!title || !assigneeId || !dueDate) {
      return NextResponse.json(
        { error: "Title, assigneeId, and dueDate are required" },
        { status: 400 }
      )
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        priority: priority || "MEDIUM",
        dueDate: new Date(dueDate),
        assigneeId,
        createdById: auth.user!.id,
        actionSteps: actionSteps
          ? {
              create: actionSteps.map((step: string) => ({
                title: step,
              })),
            }
          : undefined,
      },
      include: {
        assignee: true,
        createdBy: true,
        actionSteps: {
          include: {
            notes: true,
          },
        },
        progressNotes: true,
      },
    })

    return NextResponse.json(
      { message: "Task created successfully", task },
      { status: 201 }
    )
  } catch (error) {
    console.error("Create task error:", error)
    return NextResponse.json(
      { error: "Failed to create task" },
      { status: 500 }
    )
  }
}
