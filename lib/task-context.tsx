"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import {
  type User,
  type UserRole,
  type Task,
  type TaskStatus,
  type TaskPriority,
  type ProgressNote,
  type ActionStep,
  type WeeklyReport,
  initialReports,
} from "./store"
import { useEffect } from "react"

interface TaskContextType {
  // Auth
  currentUser: User | null
  currentRole: UserRole | null
  login: (role: UserRole, userId?: string, userData?: any) => void
  logout: () => void

  // Tasks
  tasks: Task[]
  createTask: (task: Omit<Task, "id" | "createdAt" | "completedAt" | "progressNotes">, actionSteps?: string[]) => void
  updateTaskStatus: (taskId: string, status: TaskStatus) => void
  deleteTask: (taskId: string) => void
  addProgressNote: (taskId: string, content: string) => void

  // Action Steps
  addActionStep: (taskId: string, stepTitle: string) => void
  updateActionStepStatus: (taskId: string, stepId: string, completed: boolean) => void
  deleteActionStep: (taskId: string, stepId: string) => void
  addStepNote: (taskId: string, stepId: string, content: string) => void

  // Reports
  reports: WeeklyReport[]
  createReport: (summary: string) => void

  // Employees
  allEmployees: User[]

  // Access Control & Employee Action Tracking
  getEmployeeVisibleTasks: () => Task[]
  canAccessTask: (taskId: string) => boolean
  getEmployeeActionSummary: () => {
    totalStepsCompleted: number
    totalStepsIncomplete: number
    completionPercentage: number
    taskBreakdown: Array<{ taskId: string; title: string; completedSteps: number; totalSteps: number }>
  }
}

const TaskContext = createContext<TaskContextType | null>(null)

export function TaskProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null)
  const [tasks, setTasks] = useState<Task[]>([])
  const [reports, setReports] = useState<WeeklyReport[]>([])
  const [allEmployees, setAllEmployees] = useState<User[]>([])

  const login = useCallback((role: UserRole, userId?: string, userData?: any) => {
    if (userData) {
      const user: User = {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        role: userData.role.toLowerCase() as UserRole,
        phone: userData.phone,
        location: userData.location,
      }
      setCurrentUser(user)
      setCurrentRole(userData.role.toLowerCase() as UserRole)
      // Save token or handle session if needed
    }
  }, [])

  const logout = useCallback(() => {
    setCurrentUser(null)
    setCurrentRole(null)
    localStorage.removeItem("token")
  }, [])

  const createTask = useCallback(
    async (taskData: Omit<Task, "id" | "createdAt" | "completedAt" | "progressNotes">, actionSteps?: string[]) => {
      try {
        const token = localStorage.getItem("token")
        const response = await fetch("/api/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...taskData,
            actionSteps,
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to create task")
        }

        const data = await response.json()
        setTasks((prev) => [data.task, ...prev])
      } catch (error) {
        console.error("Create task error:", error)
      }
    },
    []
  )

  const updateTaskStatus = useCallback(
    (taskId: string, status: TaskStatus) => {
      // Only employees can update task status
      if (currentRole !== "employee") {
        console.warn("[v0] Only employees can update task status")
        return
      }

      setTasks((prev) =>
        prev.map((t) =>
          t.id === taskId
            ? {
                ...t,
                status,
                completedAt:
                  status === "completed"
                    ? new Date().toISOString()
                    : null,
              }
            : t
        )
      )
    },
    [currentRole]
  )

  const deleteTask = useCallback((taskId: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId))
  }, [])

  const addProgressNote = useCallback(
    (taskId: string, content: string) => {
      if (!currentUser) return
      const note: ProgressNote = {
        id: `note-${Date.now()}`,
        taskId,
        authorId: currentUser.id,
        authorName: currentUser.name,
        content,
        timestamp: new Date().toISOString(),
      }
      setTasks((prev) =>
        prev.map((t) =>
          t.id === taskId
            ? { ...t, progressNotes: [...t.progressNotes, note] }
            : t
        )
      )
    },
    [currentUser]
  )

  const addActionStep = useCallback((taskId: string, stepTitle: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? {
              ...t,
              actionSteps: [
                ...(t.actionSteps || []),
                {
                  id: `step-${Date.now()}`,
                  title: stepTitle,
                  completed: false,
                  notes: [],
                },
              ],
            }
          : t
      )
    )
  }, [])

  const updateActionStepStatus = useCallback(
    (taskId: string, stepId: string, completed: boolean) => {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === taskId
            ? {
                ...t,
                actionSteps: (t.actionSteps || []).map((step) =>
                  step.id === stepId ? { ...step, completed } : step
                ),
              }
            : t
        )
      )
    },
    []
  )

  const deleteActionStep = useCallback((taskId: string, stepId: string) => {
    // Only admin can delete action steps
    if (currentRole !== "admin") {
      console.warn("[v0] Only admin can delete action steps")
      return
    }

    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? {
              ...t,
              actionSteps: (t.actionSteps || []).filter((step) => step.id !== stepId),
            }
          : t
      )
    )
  }, [currentRole])

  const addStepNote = useCallback(
    (taskId: string, stepId: string, content: string) => {
      if (!currentUser) return
      setTasks((prev) =>
        prev.map((t) =>
          t.id === taskId
            ? {
                ...t,
                actionSteps: (t.actionSteps || []).map((step) =>
                  step.id === stepId
                    ? {
                        ...step,
                        notes: [
                          ...step.notes,
                          {
                            id: `note-${Date.now()}`,
                            content,
                            timestamp: new Date().toISOString(),
                            authorName: currentUser.name,
                          },
                        ],
                      }
                    : step
                ),
              }
            : t
        )
      )
    },
    [currentUser]
  )

  const createReport = useCallback(
    (summary: string) => {
      const now = new Date()
      const weekStart = new Date(now.getTime() - 7 * 86400000)
      const completedCount = tasks.filter((t) => t.status === "completed").length
      const inProgressCount = tasks.filter((t) => t.status === "in-progress").length
      const todoCount = tasks.filter((t) => t.status === "todo").length
      const overdueCount = tasks.filter(
        (t) => t.status !== "completed" && new Date(t.dueDate) < now
      ).length

      const report: WeeklyReport = {
        id: `report-${Date.now()}`,
        weekStart: weekStart.toISOString().split("T")[0],
        weekEnd: now.toISOString().split("T")[0],
        createdAt: now.toISOString().split("T")[0],
        summary,
        completedCount,
        inProgressCount,
        overdueCount,
        todoCount,
      }
      setReports((prev) => [report, ...prev])
    },
    [tasks]
  )

  // Access Control: Get only tasks visible to current employee
  const getEmployeeVisibleTasks = useCallback(() => {
    if (currentRole === "admin") {
      return []
    }
    if (currentRole === "employee" && currentUser) {
      return tasks.filter((t) => t.assigneeId === currentUser.id)
    }
    return []
  }, [tasks, currentRole, currentUser])

  // Access Control: Check if current user can access a specific task
  const canAccessTask = useCallback(
    (taskId: string) => {
      if (currentRole === "admin") {
        return true
      }
      if (currentRole === "employee" && currentUser) {
        const task = tasks.find((t) => t.id === taskId)
        return task ? task.assigneeId === currentUser.id : false
      }
      return false
    },
    [tasks, currentRole, currentUser]
  )

  // Get employee action summary: count completed/incomplete action steps
  const getEmployeeActionSummary = useCallback(() => {
    if (currentRole !== "employee" || !currentUser) {
      return {
        totalStepsCompleted: 0,
        totalStepsIncomplete: 0,
        completionPercentage: 0,
        taskBreakdown: [],
      }
    }

    const employeeTasks = tasks.filter((t) => t.assigneeId === currentUser.id)
    let totalStepsCompleted = 0
    let totalStepsIncomplete = 0
    const taskBreakdown: Array<{ taskId: string; title: string; completedSteps: number; totalSteps: number }> = []

    employeeTasks.forEach((task) => {
      if (task.actionSteps && task.actionSteps.length > 0) {
        const completed = task.actionSteps.filter((step) => step.completed).length
        const total = task.actionSteps.length
        totalStepsCompleted += completed
        totalStepsIncomplete += total - completed
        taskBreakdown.push({
          taskId: task.id,
          title: task.title,
          completedSteps: completed,
          totalSteps: total,
        })
      }
    })

    const totalSteps = totalStepsCompleted + totalStepsIncomplete
    const completionPercentage = totalSteps > 0 ? Math.round((totalStepsCompleted / totalSteps) * 100) : 0

    return {
      totalStepsCompleted,
      totalStepsIncomplete,
      completionPercentage,
      taskBreakdown,
    }
  }, [tasks, currentRole, currentUser])

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;
      
      try {
        const token = localStorage.getItem('token');
        const headers = { 'Authorization': `Bearer ${token}` };

        // Fetch Tasks
        const tasksRes = await fetch('/api/tasks', { headers });
        if (tasksRes.ok) {
          const data = await tasksRes.json();
          setTasks(data.tasks || []);
        }

        // Fetch Employees (for Admin/SuperAdmin)
        if (currentRole === 'admin' || currentRole === 'superadmin') {
          const usersRes = await fetch('/api/users', { headers });
          if (usersRes.ok) {
            const data = await usersRes.json();
            setAllEmployees(data.users.filter((u: any) => u.role.toLowerCase() === 'employee'));
          }
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [currentUser, currentRole]);

  return (
    <TaskContext.Provider
      value={{
        currentUser,
        currentRole,
        login,
        logout,
        tasks,
        createTask,
        updateTaskStatus,
        deleteTask,
        addProgressNote,
        addActionStep,
        updateActionStepStatus,
        deleteActionStep,
        addStepNote,
        reports,
        createReport,
        allEmployees,
        getEmployeeVisibleTasks,
        canAccessTask,
        getEmployeeActionSummary,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export function useTaskContext() {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider")
  }
  return context
}
