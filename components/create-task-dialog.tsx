"use client"

import { useState } from "react"
import { useTaskContext } from "@/lib/task-context"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, X } from "lucide-react"
import type { TaskPriority } from "@/lib/store"

export function CreateTaskDialog() {
  const { createTask, allEmployees } = useTaskContext()
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [assigneeId, setAssigneeId] = useState("")
  const [priority, setPriority] = useState<TaskPriority>("medium")
  const [dueDate, setDueDate] = useState("")
  const [actionSteps, setActionSteps] = useState<string[]>([])
  const [stepInput, setStepInput] = useState("")

  const handleAddStep = () => {
    if (!stepInput.trim()) return
    setActionSteps([...actionSteps, stepInput.trim()])
    setStepInput("")
  }

  const handleRemoveStep = (index: number) => {
    setActionSteps(actionSteps.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    if (!title.trim() || !assigneeId || !dueDate) return
    const assignee = allEmployees.find((e) => e.id === assigneeId)
    if (!assignee) return

    createTask({
      title: title.trim(),
      description: description.trim(),
      status: "todo",
      priority,
      assigneeId,
      assigneeName: assignee.name,
      dueDate,
    }, actionSteps)

    setTitle("")
    setDescription("")
    setAssigneeId("")
    setPriority("medium")
    setDueDate("")
    setActionSteps([])
    setStepInput("")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-1.5" />
          New Task
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-card border-border sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-foreground">Create New Task</DialogTitle>
          <DialogDescription>
            Assign a task to a team member with a due date and optional action steps.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title" className="text-foreground text-sm">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title"
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description" className="text-foreground text-sm">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the task..."
              rows={3}
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-foreground text-sm">Assign To</Label>
              <Select value={assigneeId} onValueChange={setAssigneeId}>
                <SelectTrigger className="bg-secondary border-border text-foreground">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  {allEmployees.map((emp) => (
                    <SelectItem key={emp.id} value={emp.id}>
                      {emp.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-foreground text-sm">Priority</Label>
              <Select value={priority} onValueChange={(v) => setPriority(v as TaskPriority)}>
                <SelectTrigger className="bg-secondary border-border text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="due-date" className="text-foreground text-sm">Due Date</Label>
            <Input
              id="due-date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="bg-secondary border-border text-foreground"
            />
          </div>
            <div className="flex flex-col gap-2">
              <Label className="text-foreground text-sm">Date Created</Label>
              <Input
                type="text"
                readOnly
                value={new Date().toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
                className="bg-secondary border-border text-muted-foreground cursor-default"
              />
            </div>
          </div>

          {/* Action Steps Section */}
          <div className="border-t border-border pt-4 mt-2">
            <div className="flex items-start justify-between mb-3">
              <div>
                <Label className="text-foreground text-sm font-semibold block">Action Steps (Optional)</Label>
                <p className="text-xs text-muted-foreground mt-1">Example: "Create and send a letter" → "Create the letter" + "Send the letter"</p>
              </div>
            </div>
            <div className="flex gap-2 mb-3">
              <Input
                value={stepInput}
                onChange={(e) => setStepInput(e.target.value)}
                placeholder="Add an action step (e.g., 'Create the letter')"
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground text-sm"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddStep()
                  }
                }}
              />
              <Button
                type="button"
                onClick={handleAddStep}
                disabled={!stepInput.trim()}
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            {actionSteps.length > 0 && (
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium text-muted-foreground mb-1">Added steps (employees can add notes as they progress):</p>
                {actionSteps.map((step, index) => (
                  <div key={index} className="flex items-center justify-between bg-secondary p-2.5 rounded border border-border">
                    <span className="text-sm text-foreground">Step {index + 1}: {step}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveStep(index)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10 h-6 w-6 p-0"
                    >
                      <X className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Logo Placeholder Section */}
          <div className="border-t border-border pt-4 mt-2">
            <Label className="text-foreground text-sm font-semibold mb-3 block">Logo/Image Placeholder</Label>
            <div className="w-full h-24 border-2 border-dashed border-border rounded-lg flex items-center justify-center bg-secondary/30">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Logo placeholder</p>
                <p className="text-xs text-muted-foreground">Insert your logo here</p>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!title.trim() || !assigneeId || !dueDate}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Create Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
