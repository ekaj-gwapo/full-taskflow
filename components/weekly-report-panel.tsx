"use client"

import { useState, useMemo } from "react"
import { useTaskContext } from "@/lib/task-context"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { X, FileText, CheckCircle2, Clock, AlertTriangle, ListTodo, Plus, ChevronDown, ChevronUp } from "lucide-react"

interface WeeklyReportPanelProps {
  onClose: () => void
}

export function WeeklyReportPanel({ onClose }: WeeklyReportPanelProps) {
  const { tasks, reports, createReport } = useTaskContext()
  const [newSummary, setNewSummary] = useState("")
  const [showCreate, setShowCreate] = useState(false)
  const [expandedReport, setExpandedReport] = useState<string | null>(
    reports.length > 0 ? reports[0].id : null
  )

  const now = new Date()
  const currentStats = useMemo(() => {
    const completed = tasks.filter((t) => t.status === "completed").length
    const inProgress = tasks.filter((t) => t.status === "in-progress").length
    const todo = tasks.filter((t) => t.status === "todo").length
    const overdue = tasks.filter(
      (t) => t.status !== "completed" && new Date(t.dueDate) < now
    ).length
    return { completed, inProgress, todo, overdue }
  }, [tasks, now])

  const handleCreateReport = () => {
    if (!newSummary.trim()) return
    createReport(newSummary.trim())
    setNewSummary("")
    setShowCreate(false)
  }

  return (
    <div className="flex flex-col h-full bg-card">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Weekly Reports</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground h-8 w-8 p-0"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>

      {/* Current Week Snapshot */}
      <div className="p-4 border-b border-border">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
          Current Week Snapshot
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 rounded-md bg-[hsl(var(--success))]/10 px-3 py-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(var(--success))]" />
            <div>
              <p className="text-sm font-bold text-foreground">{currentStats.completed}</p>
              <p className="text-[10px] text-muted-foreground">Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-[hsl(var(--warning))]/10 px-3 py-2">
            <Clock className="h-3.5 w-3.5 text-[hsl(var(--warning))]" />
            <div>
              <p className="text-sm font-bold text-foreground">{currentStats.inProgress}</p>
              <p className="text-[10px] text-muted-foreground">In Progress</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2">
            <ListTodo className="h-3.5 w-3.5 text-muted-foreground" />
            <div>
              <p className="text-sm font-bold text-foreground">{currentStats.todo}</p>
              <p className="text-[10px] text-muted-foreground">To Do</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-destructive/10 px-3 py-2">
            <AlertTriangle className="h-3.5 w-3.5 text-destructive" />
            <div>
              <p className="text-sm font-bold text-foreground">{currentStats.overdue}</p>
              <p className="text-[10px] text-muted-foreground">Overdue</p>
            </div>
          </div>
        </div>
      </div>

      {/* Create Report */}
      <div className="p-4 border-b border-border">
        {showCreate ? (
          <div className="flex flex-col gap-3">
            <Textarea
              value={newSummary}
              onChange={(e) => setNewSummary(e.target.value)}
              placeholder="Write your weekly summary report..."
              rows={4}
              className="bg-secondary border-border text-foreground text-sm placeholder:text-muted-foreground resize-none"
            />
            <div className="flex items-center gap-2 justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowCreate(false)
                  setNewSummary("")
                }}
                className="text-muted-foreground hover:text-foreground text-xs"
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={handleCreateReport}
                disabled={!newSummary.trim()}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs"
              >
                Save Report
              </Button>
            </div>
          </div>
        ) : (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCreate(true)}
            className="w-full border-border text-foreground hover:bg-accent text-xs"
          >
            <Plus className="h-3.5 w-3.5 mr-1.5" />
            Write New Report
          </Button>
        )}
      </div>

      {/* Past Reports */}
      <ScrollArea className="flex-1">
        <div className="p-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Past Reports
          </p>
          {reports.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-6">
              No reports created yet.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {reports.map((report) => {
                const isExpanded = expandedReport === report.id
                return (
                  <div
                    key={report.id}
                    className="rounded-lg border border-border bg-secondary/50 overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedReport(isExpanded ? null : report.id)
                      }
                      className="w-full flex items-center justify-between p-3 text-left hover:bg-accent/50 transition-colors"
                    >
                      <div>
                        <p className="text-xs font-medium text-foreground">
                          Week of {report.weekStart}
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                          Created {report.createdAt}
                        </p>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-3.5 w-3.5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className="px-3 pb-3">
                        <Separator className="mb-3 bg-border" />
                        <div className="grid grid-cols-4 gap-2 mb-3">
                          <div className="text-center">
                            <p className="text-sm font-bold text-[hsl(var(--success))]">
                              {report.completedCount}
                            </p>
                            <p className="text-[9px] text-muted-foreground">Done</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-bold text-[hsl(var(--warning))]">
                              {report.inProgressCount}
                            </p>
                            <p className="text-[9px] text-muted-foreground">Active</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-bold text-destructive">
                              {report.overdueCount}
                            </p>
                            <p className="text-[9px] text-muted-foreground">Late</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-bold text-muted-foreground">
                              {report.todoCount}
                            </p>
                            <p className="text-[9px] text-muted-foreground">Pending</p>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {report.summary}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
