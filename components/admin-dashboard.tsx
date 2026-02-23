"use client"

import { useState, useMemo } from "react"
import { useTaskContext } from "@/lib/task-context"
import { StatsCards } from "@/components/stats-cards"
import { CreateTaskDialog } from "@/components/create-task-dialog"
import { TaskDetailPanel } from "@/components/task-detail-panel"
import { AdminSidebar } from "@/components/admin-sidebar"
import { StatusBadge, PriorityBadge } from "@/components/status-badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search, FileText, ChevronRight } from "lucide-react"
import { WeeklyReportPanel } from "@/components/weekly-report-panel"
import { TopCompletersChart } from "@/components/top-completers-chart"
import type { Task, TaskStatus } from "@/lib/store"

function TaskRow({
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
  const initials = task.assigneeName
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <button
      onClick={onSelect}
      className={`w-full flex items-center gap-4 px-4 py-3 text-left transition-colors hover:bg-accent/50 border-b border-border ${
        isSelected ? "bg-accent/70" : ""
      }`}
    >
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
        <p className="text-xs text-muted-foreground mt-0.5 truncate">
          {task.description}
        </p>
      </div>
      <div className="hidden md:flex items-center gap-3 shrink-0">
        <PriorityBadge priority={task.priority} />
        <StatusBadge status={task.status} />
        <div className="flex items-center gap-1.5">
          <Avatar className="h-5 w-5">
            <AvatarFallback className="bg-secondary text-foreground text-[9px]">
              {initials}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground w-20 truncate">
            {task.assigneeName}
          </span>
        </div>
        <span className="text-xs text-muted-foreground w-24 text-right">
          {task.dueDate}
        </span>
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
    </button>
  )
}

export function AdminDashboard() {
  const { tasks, allEmployees } = useTaskContext()
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [showReport, setShowReport] = useState(false)
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null)

  const selectedEmployee = selectedEmployeeId
    ? allEmployees.find((e) => e.id === selectedEmployeeId) ?? null
    : null

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      const matchesEmployee =
        selectedEmployeeId === null || t.assigneeId === selectedEmployeeId
      const matchesStatus =
        filterStatus === "all" || t.status === filterStatus
      const matchesSearch =
        searchQuery === "" ||
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.assigneeName.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesEmployee && matchesStatus && matchesSearch
    })
  }, [tasks, filterStatus, searchQuery, selectedEmployeeId])

  // Tasks filtered only by employee (not by status/search) for tab counts
  const employeeTasks = useMemo(() => {
    return tasks.filter(
      (t) => selectedEmployeeId === null || t.assigneeId === selectedEmployeeId
    )
  }, [tasks, selectedEmployeeId])

  const handleSelectEmployee = (employeeId: string | null) => {
    setSelectedEmployeeId(employeeId)
    setSelectedTask(null)
    setFilterStatus("all")
    setSearchQuery("")
  }

  return (
    <div className="flex flex-1 min-h-0">
      {/* Admin Sidebar */}
      <div className="hidden lg:block w-80 shrink-0 border-r border-border">
        <AdminSidebar
          selectedEmployeeId={selectedEmployeeId}
          onSelectEmployee={handleSelectEmployee}
        />
      </div>

      {/* Main Content */}
      <div className={`flex flex-col min-w-0 overflow-y-auto ${selectedTask || showReport ? "w-0 lg:flex-1" : "flex-1"}`}>
        <div className="p-4 lg:p-6 flex flex-col gap-6">
          {/* Header with employee context */}
          {selectedEmployee && (
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                {selectedEmployee.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  {selectedEmployee.name}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {selectedEmployee.email}
                </p>
              </div>
            </div>
          )}

          {/* Stats */}
          <StatsCards tasks={employeeTasks} />

          {/* Leaderboard Chart - only visible when viewing all employees */}
          {!selectedEmployeeId && <TopCompletersChart />}

          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="relative max-w-xs w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tasks..."
                  className="pl-9 h-9 bg-secondary border-border text-foreground placeholder:text-muted-foreground text-sm"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowReport(!showReport)}
                className="inline-flex items-center gap-1.5 rounded-md px-3 h-9 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <FileText className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Reports</span>
              </button>
              <CreateTaskDialog />
            </div>
          </div>

          {/* Tabs and Task List */}
          <Tabs value={filterStatus} onValueChange={setFilterStatus}>
            <TabsList className="bg-secondary border border-border h-9">
              <TabsTrigger value="all" className="text-xs data-[state=active]:bg-background data-[state=active]:text-foreground">
                All ({employeeTasks.length})
              </TabsTrigger>
              <TabsTrigger value="todo" className="text-xs data-[state=active]:bg-background data-[state=active]:text-foreground">
                To Do ({employeeTasks.filter((t) => t.status === "todo").length})
              </TabsTrigger>
              <TabsTrigger value="in-progress" className="text-xs data-[state=active]:bg-background data-[state=active]:text-foreground">
                In Progress ({employeeTasks.filter((t) => t.status === "in-progress").length})
              </TabsTrigger>
              <TabsTrigger value="completed" className="text-xs data-[state=active]:bg-background data-[state=active]:text-foreground">
                Completed ({employeeTasks.filter((t) => t.status === "completed").length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value={filterStatus} className="mt-0">
              <div className="rounded-lg border border-border bg-card overflow-hidden mt-4">
                {/* Table Header */}
                <div className="flex items-center gap-4 px-4 py-2.5 border-b border-border bg-secondary/50">
                  <span className="flex-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Task
                  </span>
                  <div className="hidden md:flex items-center gap-3">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider w-14 text-center">
                      Priority
                    </span>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider w-[90px] text-center">
                      Status
                    </span>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider w-[88px]">
                      Assignee
                    </span>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider w-24 text-right">
                      Due Date
                    </span>
                  </div>
                  <span className="w-4" />
                </div>

                {/* Task Rows */}
                {filteredTasks.length === 0 ? (
                  <div className="py-12 text-center text-sm text-muted-foreground">
                    No tasks found.
                  </div>
                ) : (
                  filteredTasks.map((task) => (
                    <TaskRow
                      key={task.id}
                      task={task}
                      onSelect={() =>
                        setSelectedTask(
                          selectedTask?.id === task.id ? null : task
                        )
                      }
                      isSelected={selectedTask?.id === task.id}
                    />
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Side Panel */}
      {selectedTask && !showReport && (
        <div className="w-[380px] shrink-0 border-l border-border overflow-y-auto">
          <TaskDetailPanel
            task={tasks.find((t) => t.id === selectedTask.id) || selectedTask}
            onClose={() => setSelectedTask(null)}
            showStatusControl={false}
            showDeleteButton
          />
        </div>
      )}

      {showReport && (
        <div className="w-[380px] shrink-0 border-l border-border overflow-y-auto">
          <WeeklyReportPanel onClose={() => setShowReport(false)} />
        </div>
      )}
    </div>
  )
}
