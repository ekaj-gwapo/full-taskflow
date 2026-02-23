import { cn } from "@/lib/utils"
import type { TaskStatus } from "@/lib/store"

const statusConfig: Record<
  TaskStatus,
  { label: string; dotClass: string; bgClass: string; textClass: string }
> = {
  todo: {
    label: "To Do",
    dotClass: "bg-muted-foreground",
    bgClass: "bg-muted",
    textClass: "text-muted-foreground",
  },
  "in-progress": {
    label: "In Progress",
    dotClass: "bg-[hsl(var(--warning))]",
    bgClass: "bg-[hsl(var(--warning))]/10",
    textClass: "text-[hsl(var(--warning))]",
  },
  completed: {
    label: "Completed",
    dotClass: "bg-[hsl(var(--success))]",
    bgClass: "bg-[hsl(var(--success))]/10",
    textClass: "text-[hsl(var(--success))]",
  },
}

export function StatusBadge({ status }: { status: TaskStatus }) {
  const config = statusConfig[status]
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        config.bgClass,
        config.textClass
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", config.dotClass)} />
      {config.label}
    </span>
  )
}

export function PriorityBadge({ priority }: { priority: string }) {
  const config: Record<string, { label: string; className: string }> = {
    high: { label: "High", className: "bg-destructive/10 text-destructive" },
    medium: { label: "Medium", className: "bg-primary/10 text-primary" },
    low: { label: "Low", className: "bg-muted text-muted-foreground" },
  }
  const c = config[priority] || config.low
  return (
    <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium", c.className)}>
      {c.label}
    </span>
  )
}
