"use client"

import { useState, useMemo, useEffect } from "react"
import { useTaskContext } from "@/lib/task-context"
import { TaskDetailPanel } from "@/components/task-detail-panel"
import { EmployeeSidebar } from "@/components/employee-sidebar"
import { StatusBadge, PriorityBadge } from "@/components/status-badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ClipboardList, Clock, CheckCircle2, AlertTriangle, Bell, ChevronRight } from "lucide-react"
import type { Task } from "@/lib/store"

function NoteReminder({ task }: { task: Task }) {
  const [minutes, setMinutes] = useState(0)

  useEffect(() => {
    if (task.status !== "in-progress") return

    const lastNote = task.progressNotes[task.progressNotes.length - 1]
    if (lastNote) {
      const diff = Date.now() - new Date(lastNote.timestamp).getTime()
      const mins = Math.floor(diff / 60000)
      setMinutes(mins)
    } else {
      setMinutes(30)
    }

    const interval = setInterval(() => {
      if (lastNote) {
        const diff = Date.now() - new Date(lastNote.timestamp).getTime()
        setMinutes(Math.floor(diff / 60000))
      }
    }, 60000)

    return () => clearInterval(interval)
  }, [task.status, task.progressNotes])

  if (task.status !== "in-progress") return null

  const isOverdue = minutes >= 30
  const progress = Math.min((minutes / 30) * 100, 100)

  return (
    <div className={`flex items-center gap-2 mt-2 px-2.5 py-1.5 rounded-md text-xs ${
      isOverdue
        ? "bg-destructive/10 text-destructive"
        : "bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))]"
    }`}>
      {isOverdue ? (
        <Bell className="h-3 w-3 animate-pulse" />
      ) : (
        <Clock className="h-3 w-3" />
      )}
      <span className="flex-1">
        {isOverdue
          ? "Progress note overdue! Please update now."
          : `Next note due in ${30 - minutes}m`}
      </span>
      <Progress
        value={progress}
        className="w-16 h-1.5 bg-secondary"
      />
    </div>
  )
}

function EmployeeTaskCard({
  task,
  onSelect,
  isSelected,
}: {
  task: Task
  onSelect: () => void
  isSelected: boolean
}) {
  const isOverdue =
    task.status !== "completed" && new Date(task.dueDate) < new Date()

  return (
    <button
      onClick={onSelect}
      className={`w-full text-left rounded-lg border transition-colors ${
        isSelected
          ? "border-primary bg-primary/5"
          : "border-border bg-card hover:bg-accent/50"
      }`}
    >
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground truncate">
                {task.title}
              </span>
              {isOverdue && (
                <span className="shrink-0 text-[10px] font-medium text-destructive bg-destructive/10 rounded px-1.5 py-0.5">
                  Overdue
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
              {task.description}
            </p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
        </div>
        <div className="flex items-center gap-2 mt-3">
          <StatusBadge status={task.status} />
          <PriorityBadge priority={task.priority} />
          <span className="text-xs text-muted-foreground ml-auto">
            Due{" "}
            {task.dueDate.includes("T")
              ? new Date(task.dueDate).toLocaleString(undefined, {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })
              : task.dueDate}
          </span>
        </div>
        <NoteReminder task={task} />
      </div>
    </button>
  )
}

export function EmployeeDashboard() {
  const { tasks, currentUser, canAccessTask } = useTaskContext()
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>("all")

  const myTasks = useMemo(() => {
    return tasks.filter((t) => t.assigneeId === currentUser?.id)
  }, [tasks, currentUser])

  // Ensure selected task is accessible
  useEffect(() => {
    if (selectedTask && !canAccessTask(selectedTask.id)) {
      setSelectedTask(null)
    }
  }, [selectedTask, canAccessTask])

  const filteredTasks = useMemo(() => {
    if (filterStatus === "all") return myTasks
    return myTasks.filter((t) => t.status === filterStatus)
  }, [myTasks, filterStatus])

  const todo = myTasks.filter((t) => t.status === "todo").length
  const inProgress = myTasks.filter((t) => t.status === "in-progress").length
  const completed = myTasks.filter((t) => t.status === "completed").length
  const overdue = myTasks.filter(
    (t) => t.status !== "completed" && new Date(t.dueDate) < new Date()
  ).length

  const stats = [
    { label: "My Tasks", value: myTasks.length, icon: ClipboardList, iconBg: "bg-primary/10", iconColor: "text-primary" },
    { label: "In Progress", value: inProgress, icon: Clock, iconBg: "bg-[hsl(var(--warning))]/10", iconColor: "text-[hsl(var(--warning))]" },
    { label: "Completed", value: completed, icon: CheckCircle2, iconBg: "bg-[hsl(var(--success))]/10", iconColor: "text-[hsl(var(--success))]" },
    { label: "Overdue", value: overdue, icon: AlertTriangle, iconBg: "bg-destructive/10", iconColor: "text-destructive" },
  ]

  return (
    <div className="flex flex-1 min-h-0">
      {/* Sidebar with My Tasks and Profile */}
      <div className="hidden lg:block">
        <EmployeeSidebar
          selectedEmployeeId={null}
          onSelectEmployee={() => {}}
        />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="p-4 lg:p-6 flex flex-col gap-6">
          {/* Stats */}
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

          {/* Task Filter Tabs */}
          <Tabs value={filterStatus} onValueChange={setFilterStatus}>
            <div className="flex items-center justify-between">
              <TabsList className="bg-secondary border border-border h-9">
                <TabsTrigger value="all" className="text-xs data-[state=active]:bg-background data-[state=active]:text-foreground">
                  All ({myTasks.length})
                </TabsTrigger>
                <TabsTrigger value="todo" className="text-xs data-[state=active]:bg-background data-[state=active]:text-foreground">
                  To Do ({todo})
                </TabsTrigger>
                <TabsTrigger value="in-progress" className="text-xs data-[state=active]:bg-background data-[state=active]:text-foreground">
                  In Progress ({inProgress})
                </TabsTrigger>
                <TabsTrigger value="completed" className="text-xs data-[state=active]:bg-background data-[state=active]:text-foreground">
                  Completed ({completed})
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={filterStatus}>
              {filteredTasks.length === 0 ? (
                <div className="py-12 text-center text-sm text-muted-foreground rounded-lg border border-border bg-card mt-4">
                  No tasks in this category.
                </div>
              ) : (
                <div className="grid gap-3 mt-4">
                  {filteredTasks.map((task) => (
                    <EmployeeTaskCard
                      key={task.id}
                      task={task}
                      onSelect={() =>
                        setSelectedTask(
                          selectedTask?.id === task.id ? null : task
                        )
                      }
                      isSelected={selectedTask?.id === task.id}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Detail Panel */}
      {selectedTask && (
        <div className="hidden lg:block w-[380px] shrink-0 border-l border-border overflow-y-auto">
          <TaskDetailPanel
            task={tasks.find((t) => t.id === selectedTask.id) || selectedTask}
            onClose={() => setSelectedTask(null)}
            showStatusControl
            showNoteInput
          />
        </div>
      )}
    </div>
  )
}
