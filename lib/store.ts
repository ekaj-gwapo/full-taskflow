export type UserRole = "admin" | "employee" | "superadmin"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  phone?: string
  location?: string
}

export type TaskStatus = "todo" | "in-progress" | "completed"
export type TaskPriority = "low" | "medium" | "high"

export interface ProgressNote {
  id: string
  taskId: string
  authorId: string
  authorName: string
  content: string
  timestamp: string
}

export interface StepNote {
  id: string
  content: string
  timestamp: string
  authorName: string
}

export interface ActionStep {
  id: string
  title: string
  completed: boolean
  notes: StepNote[]
}

export interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  priority: TaskPriority
  assigneeId: string
  assigneeName: string
  createdAt: string
  dueDate: string
  completedAt: string | null
  progressNotes: ProgressNote[]
  actionSteps?: ActionStep[]
}

export interface WeeklyReport {
  id: string
  weekStart: string
  weekEnd: string
  createdAt: string
  summary: string
  completedCount: number
  inProgressCount: number
  overdueCount: number
  todoCount: number
}

// Mock data removed for pure SQLite implementation
export const employees: User[] = []
export const adminUser: User | null = null
export const initialTasks: Task[] = []
export const initialReports: WeeklyReport[] = []
