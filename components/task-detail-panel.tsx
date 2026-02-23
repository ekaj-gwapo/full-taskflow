"use client"

import { useState } from "react"
import { useTaskContext } from "@/lib/task-context"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { StatusBadge, PriorityBadge } from "@/components/status-badge"
import { ActionStepsSection } from "@/components/action-steps-section"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { X, Calendar, User, Send, MessageSquare, Trash2 } from "lucide-react"
import type { Task, TaskStatus } from "@/lib/store"
import { formatDistanceToNow } from "date-fns"

interface TaskDetailPanelProps {
  task: Task
  onClose: () => void
  showStatusControl?: boolean
  showNoteInput?: boolean
  showDeleteButton?: boolean
}

export function TaskDetailPanel({
  task,
  onClose,
  showStatusControl = false,
  showNoteInput = false,
  showDeleteButton = false,
}: TaskDetailPanelProps) {
  const { currentRole, currentUser, updateTaskStatus, addProgressNote, deleteTask, addActionStep, updateActionStepStatus, deleteActionStep, addStepNote, canAccessTask } = useTaskContext()
  const [noteContent, setNoteContent] = useState("")

  // Security check: employees can only view their assigned tasks
  const hasAccess = canAccessTask(task.id)
  
  if (!hasAccess && currentRole === "employee") {
    return (
      <div className="flex flex-col h-full bg-card border-l border-border items-center justify-center">
        <div className="text-center p-4">
          <p className="text-sm text-muted-foreground font-medium">Access Denied</p>
          <p className="text-xs text-muted-foreground mt-1">You can only view your assigned tasks.</p>
        </div>
      </div>
    )
  }

  const isOverdue =
    task.status !== "completed" && new Date(task.dueDate) < new Date()

  const handleAddNote = () => {
    if (!noteContent.trim()) return
    addProgressNote(task.id, noteContent.trim())
    setNoteContent("")
  }

  const handleDelete = () => {
    deleteTask(task.id)
    onClose()
  }

  const handleAddActionStep = (stepTitle: string) => {
    addActionStep(task.id, stepTitle)
  }

  const handleUpdateActionStepStatus = (stepId: string, completed: boolean) => {
    updateActionStepStatus(task.id, stepId, completed)
  }

  const handleDeleteActionStep = (stepId: string) => {
    deleteActionStep(task.id, stepId)
  }

  const handleAddStepNote = (stepId: string, content: string) => {
    addStepNote(task.id, stepId, content)
  }

  return (
    <div className="flex flex-col h-full bg-card border-l border-border">
      {/* Header */}
      <div className="flex items-start justify-between p-4 border-b border-border">
        <div className="flex-1 min-w-0 pr-2">
          <h3 className="text-base font-semibold text-foreground truncate">
            {task.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {task.description}
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground shrink-0 h-8 w-8 p-0"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>

      {/* Meta */}
      <div className="p-4 border-b border-border flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Status</span>
          {showStatusControl ? (
            <Select
              value={task.status}
              onValueChange={(v) => updateTaskStatus(task.id, v as TaskStatus)}
            >
              <SelectTrigger className="h-7 w-auto bg-secondary border-border text-xs px-2.5 gap-1.5">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="todo">To Do</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          ) : (
            <StatusBadge status={task.status} />
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Priority</span>
          <PriorityBadge priority={task.priority} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
            <User className="h-3 w-3" />
            Assignee
          </span>
          <span className="text-xs text-foreground">{task.assigneeName}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
            <Calendar className="h-3 w-3" />
            Due Date
          </span>
          <span
            className={`text-xs ${isOverdue ? "text-destructive font-medium" : "text-foreground"}`}
          >
            {task.dueDate.includes("T")
              ? new Date(task.dueDate).toLocaleString(undefined, {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })
              : task.dueDate}
            {isOverdue && " (Overdue)"}
          </span>
        </div>
        {task.completedAt && (
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              Completed At
            </span>
            <span className="text-xs text-[hsl(var(--success))] font-medium">
              {new Date(task.completedAt).toLocaleString(undefined, {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })}
            </span>
          </div>
        )}
        {showDeleteButton && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDelete}
            className="w-full mt-1 text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-3.5 w-3.5 mr-1.5" />
            Delete Task
          </Button>
        )}
      </div>

      {/* Action Steps Section - Visible to both admin and employees */}
      {task.actionSteps && task.actionSteps.length > 0 ? (
        <div className="px-4 py-3 border-b border-border">
          <ActionStepsSection
            steps={task.actionSteps || []}
            onAddStep={handleAddActionStep}
            onUpdateStepStatus={handleUpdateActionStepStatus}
            onDeleteStep={handleDeleteActionStep}
            onAddStepNote={handleAddStepNote}
            userRole={currentRole}
          />
        </div>
      ) : null}

      {/* Progress Notes */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex items-center gap-2 px-4 pt-4 pb-2">
          <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Progress Notes ({task.progressNotes.length})
          </span>
        </div>

        <ScrollArea className="flex-1 px-4">
          {task.progressNotes.length === 0 ? (
            <p className="text-sm text-muted-foreground py-6 text-center">
              No progress notes yet.
            </p>
          ) : (
            <div className="flex flex-col gap-3 pb-4">
              {task.progressNotes.map((note) => {
                const initials = note.authorName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                return (
                  <div key={note.id} className="flex gap-2.5">
                    <Avatar className="h-6 w-6 shrink-0 mt-0.5">
                      <AvatarFallback className="bg-secondary text-foreground text-[10px]">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-foreground">
                          {note.authorName}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {formatDistanceToNow(new Date(note.timestamp), {
                            addSuffix: true,
                          })}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                        {note.content}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </ScrollArea>

        {/* Note Input */}
        {showNoteInput && task.status === "in-progress" && (
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="Write a progress note..."
                rows={2}
                className="bg-secondary border-border text-foreground text-sm placeholder:text-muted-foreground resize-none flex-1"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                    handleAddNote()
                  }
                }}
              />
              <Button
                size="sm"
                onClick={handleAddNote}
                disabled={!noteContent.trim()}
                className="bg-primary text-primary-foreground hover:bg-primary/90 self-end h-8 w-8 p-0"
              >
                <Send className="h-3.5 w-3.5" />
                <span className="sr-only">Send note</span>
              </Button>
            </div>
            <p className="text-[10px] text-muted-foreground mt-1.5">
              Press Ctrl+Enter to send
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
