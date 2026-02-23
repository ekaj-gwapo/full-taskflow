"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronDown, Plus, Trash2, Send } from "lucide-react"
import type { ActionStep, UserRole } from "@/lib/store"
import { formatDistanceToNow } from "date-fns"

interface ActionStepsSectionProps {
  steps: ActionStep[]
  onAddStep: (stepTitle: string) => void
  onUpdateStepStatus: (stepId: string, completed: boolean) => void
  onDeleteStep: (stepId: string) => void
  onAddStepNote: (stepId: string, content: string) => void
  userRole?: UserRole
}

export function ActionStepsSection({
  steps,
  onAddStep,
  onUpdateStepStatus,
  onDeleteStep,
  onAddStepNote,
  userRole = "employee",
}: ActionStepsSectionProps) {
  const [newStepTitle, setNewStepTitle] = useState("")
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set())
  const [stepNoteInputs, setStepNoteInputs] = useState<Record<string, string>>({})

  const handleToggleExpand = (stepId: string) => {
    const newExpanded = new Set(expandedSteps)
    if (newExpanded.has(stepId)) {
      newExpanded.delete(stepId)
    } else {
      newExpanded.add(stepId)
    }
    setExpandedSteps(newExpanded)
  }

  const handleAddStep = () => {
    if (!newStepTitle.trim()) return
    onAddStep(newStepTitle.trim())
    setNewStepTitle("")
  }

  const handleAddNote = (stepId: string) => {
    const content = stepNoteInputs[stepId]
    if (!content?.trim()) return
    onAddStepNote(stepId, content.trim())
    setStepNoteInputs((prev) => ({ ...prev, [stepId]: "" }))
  }

  const completedCount = steps.filter((s) => s.completed).length
  const totalCount = steps.length

  return (
    <div className="flex flex-col gap-4 border-t border-border pt-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Action Steps</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {completedCount} of {totalCount} completed
          </p>
        </div>
      </div>

      {/* Progress bar */}
      {totalCount > 0 && (
        <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-300"
            style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
          />
        </div>
      )}

      {/* Add new step - Only for employees */}
      {userRole !== "admin" && (
        <div className="flex gap-2">
          <input
            type="text"
            value={newStepTitle}
            onChange={(e) => setNewStepTitle(e.target.value)}
            placeholder="Add a new action step..."
            className="flex-1 px-3 py-2 bg-secondary border border-border rounded text-sm text-foreground placeholder:text-muted-foreground"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                handleAddStep()
              }
            }}
          />
          <Button
            size="sm"
            onClick={handleAddStep}
            disabled={!newStepTitle.trim()}
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 w-9 p-0 shrink-0"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Steps list */}
      {steps.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-4">No action steps yet.</p>
      ) : (
        <div className="flex flex-col gap-2">
          {steps.map((step, index) => (
            <div key={step.id} className="border border-border rounded-lg overflow-hidden bg-secondary/30">
              {/* Step header */}
              <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-secondary/50 transition-colors">
                {userRole !== "admin" && (
                  <Checkbox
                    checked={step.completed}
                    onChange={(e) => onUpdateStepStatus(step.id, e.target.checked)}
                    className="h-4 w-4"
                  />
                )}
                {userRole === "admin" && (
                  <div
                    className={`h-4 w-4 rounded border border-border flex items-center justify-center ${
                      step.completed ? "bg-primary" : "bg-secondary"
                    }`}
                  >
                    {step.completed && <span className="text-white text-xs">✓</span>}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-muted-foreground">Step {index + 1}</span>
                    <p
                      className={`text-sm font-medium ${
                        step.completed
                          ? "text-muted-foreground line-through"
                          : "text-foreground"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggleExpand(step.id)}
                  className="text-muted-foreground hover:text-foreground p-1 transition-colors"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      expandedSteps.has(step.id) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {userRole === "admin" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      onDeleteStep(step.id)
                    }}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10 h-7 w-7 p-0"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>

              {/* Step details (notes) */}
              {expandedSteps.has(step.id) && (
                <div className="border-t border-border px-3 py-3 bg-background/50 space-y-3">
                  {/* Existing notes */}
                  {step.notes.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Notes ({step.notes.length})
                      </p>
                      <div className="flex flex-col gap-2">
                        {step.notes.map((note) => {
                          const initials = note.authorName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                          return (
                            <div key={note.id} className="flex gap-2">
                              <Avatar className="h-5 w-5 shrink-0 mt-0.5">
                                <AvatarFallback className="bg-primary text-primary-foreground text-[8px]">
                                  {initials}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-xs font-medium text-foreground">
                                    {note.authorName}
                                  </span>
                                  <span className="text-[10px] text-muted-foreground">
                                    {formatDistanceToNow(new Date(note.timestamp), {
                                      addSuffix: true,
                                    })}
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                  {note.content}
                                </p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Add note input - Only for employees */}
                  {userRole !== "admin" && (
                    <div className="space-y-2 pt-2 border-t border-border">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Add Note
                      </p>
                      <div className="flex gap-2">
                        <textarea
                          value={stepNoteInputs[step.id] || ""}
                          onChange={(e) =>
                            setStepNoteInputs((prev) => ({
                              ...prev,
                              [step.id]: e.target.value,
                            }))
                          }
                          placeholder="Add a progress detail for this step..."
                          rows={2}
                          className="flex-1 px-2.5 py-2 bg-secondary border border-border rounded text-xs text-foreground placeholder:text-muted-foreground resize-none"
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                              e.preventDefault()
                              handleAddNote(step.id)
                            }
                          }}
                        />
                        <Button
                          size="sm"
                          onClick={() => handleAddNote(step.id)}
                          disabled={!stepNoteInputs[step.id]?.trim()}
                          className="bg-primary text-primary-foreground hover:bg-primary/90 self-end h-8 w-8 p-0"
                        >
                          <Send className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                      <p className="text-[10px] text-muted-foreground">
                        Press Ctrl+Enter to send
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
