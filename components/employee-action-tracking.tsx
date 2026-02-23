"use client"

import { useTaskContext } from "@/lib/task-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, AlertCircle } from "lucide-react"

export function EmployeeActionTracking() {
  const { getEmployeeActionSummary, currentRole } = useTaskContext()

  // Only show this component to employees
  if (currentRole !== "employee") {
    return null
  }

  const summary = getEmployeeActionSummary()

  if (summary.taskBreakdown.length === 0) {
    return (
      <Card className="border-border bg-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">My Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center py-4">
            No action steps assigned yet.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium">My Actions Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overall Summary */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className="font-semibold text-foreground">
              {summary.completionPercentage}%
            </span>
          </div>
          <Progress
            value={summary.completionPercentage}
            className="h-2 bg-secondary"
          />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {summary.totalStepsCompleted} completed
            </span>
            <span>
              {summary.totalStepsIncomplete} remaining
            </span>
          </div>
        </div>

        {/* Task Breakdown */}
        <div className="mt-4 pt-4 border-t border-border space-y-3">
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">
            Task Breakdown
          </h4>
          {summary.taskBreakdown.map((taskItem) => {
            const percentage =
              taskItem.totalSteps > 0
                ? Math.round((taskItem.completedSteps / taskItem.totalSteps) * 100)
                : 0
            const isComplete = taskItem.completedSteps === taskItem.totalSteps

            return (
              <div
                key={taskItem.taskId}
                className="flex items-start gap-3 text-sm p-2.5 rounded-md bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="mt-0.5 shrink-0">
                  {isComplete ? (
                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--success))]" />
                  ) : taskItem.completedSteps > 0 ? (
                    <AlertCircle className="h-4 w-4 text-[hsl(var(--warning))]" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">
                    {taskItem.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {taskItem.completedSteps} of {taskItem.totalSteps} actions completed
                  </p>
                  <Progress
                    value={percentage}
                    className="h-1.5 bg-secondary mt-1.5"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
