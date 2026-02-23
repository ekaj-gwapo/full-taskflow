"use client"

import { useTaskContext } from "@/lib/task-context"
import { Card, CardContent } from "@/components/ui/card"
import { ClipboardList, Clock, CheckCircle2, AlertTriangle } from "lucide-react"
import type { Task } from "@/lib/store"

interface StatsCardsProps {
  tasks?: Task[]
}

export function StatsCards({ tasks: tasksProp }: StatsCardsProps) {
  const ctx = useTaskContext()
  const tasks = tasksProp ?? ctx.tasks

  const now = new Date()
  const todo = tasks.filter((t) => t.status === "todo").length
  const inProgress = tasks.filter((t) => t.status === "in-progress").length
  const completed = tasks.filter((t) => t.status === "completed").length
  const overdue = tasks.filter(
    (t) => t.status !== "completed" && new Date(t.dueDate) < now
  ).length

  const stats = [
    {
      label: "Total Tasks",
      value: tasks.length,
      icon: ClipboardList,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      label: "In Progress",
      value: inProgress,
      icon: Clock,
      iconBg: "bg-[hsl(var(--warning))]/10",
      iconColor: "text-[hsl(var(--warning))]",
    },
    {
      label: "Completed",
      value: completed,
      icon: CheckCircle2,
      iconBg: "bg-[hsl(var(--success))]/10",
      iconColor: "text-[hsl(var(--success))]",
    },
    {
      label: "Overdue",
      value: overdue,
      icon: AlertTriangle,
      iconBg: "bg-destructive/10",
      iconColor: "text-destructive",
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-border bg-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${stat.iconBg}`}>
                <stat.icon className={`h-4 w-4 ${stat.iconColor}`} />
              </div>
              <div className="min-w-0">
                <p className="text-2xl font-bold text-foreground leading-none">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
