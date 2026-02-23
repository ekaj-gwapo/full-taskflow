import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth-utils"

const prisma = new PrismaClient()

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string; stepId: string } }
) {
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const { completed } = await request.json()

    // Verify task and step exist
    const task = await prisma.task.findUnique({
      where: { id: params.id },
    })

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    // Employee can only update steps for their own tasks
    if (auth.user!.role === "EMPLOYEE" && task.assigneeId !== auth.user!.id) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    const actionStep = await prisma.actionStep.update({
      where: { id: params.stepId },
      data: {
        completed: typeof completed === "boolean" ? completed : undefined,
      },
      include: {
        notes: true,
      },
    })

    return NextResponse.json(
      { message: "Action step updated successfully", actionStep },
      { status: 200 }
    )
  } catch (error) {
    console.error("Update action step error:", error)
    return NextResponse.json(
      { error: "Failed to update action step" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string; stepId: string } }
) {
  try {
    const auth = requireAuth(request)
    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    // Verify task exists
    const task = await prisma.task.findUnique({
      where: { id: params.id },
    })

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    // Employee can only delete steps from their own tasks
    if (auth.user!.role === "EMPLOYEE" && task.assigneeId !== auth.user!.id) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      )
    }

    await prisma.actionStep.delete({
      where: { id: params.stepId },
    })

    return NextResponse.json(
      { message: "Action step deleted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Delete action step error:", error)
    return NextResponse.json(
      { error: "Failed to delete action step" },
      { status: 500 }
    )
  }
}
