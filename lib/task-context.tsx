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
    async (taskId: string, status: TaskStatus) => {
      try {
        const token = localStorage.getItem("token")
        if (!token) {
           console.error("Update task status error: No token found")
           return
        }
        
        console.log("[v0] updateTaskStatus called with taskId:", taskId, "status:", status)
        console.log("[v0] Available tasks in state:", tasks.map(t => ({ id: t.id, title: t.title })))
        
        const response = await fetch(`/api/tasks/${taskId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status }),
        })
        
        console.log("[v0] API response status:", response.status)

        if (!response.ok) {
          const errorData = await response.json()
          console.error("Update task status error:", errorData.error || response.statusText)
          throw new Error(errorData.error || "Failed to update task status")
        }

        const data = await response.json()
        setTasks((prev) =>
          prev.map((t) => (t.id === taskId ? data.task : t))
        )
      } catch (error) {
        console.error("Update task status error:", error)
      }
    },
    []
  )

  const deleteTask = useCallback(async (taskId: string) => {
    try {
      const token = localStorage.getItem("token")
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error("Failed to delete task")
      }

      setTasks((prev) => prev.filter((t) => t.id !== taskId))
    } catch (error) {
      console.error("Delete task error:", error)
    }
  }, [])

  const addProgressNote = useCallback(
    async (taskId: string, content: string) => {
      if (!currentUser) return
      try {
        const token = localStorage.getItem("token")
        const response = await fetch(`/api/tasks/${taskId}/progress-notes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ content }),
        })

        if (!response.ok) {
          throw new Error("Failed to add progress note")
        }

        const data = await response.json()
        setTasks((prev) =>
          prev.map((t) =>
            t.id === taskId
              ? { ...t, progressNotes: [...t.progressNotes, data.note] }
              : t
          )
        )
      } catch (error) {
        console.error("Add progress note error:", error)
      }
    },
    [currentUser]
  )

  const addActionStep = useCallback(async (taskId: string, stepTitle: string) => {
    try {
      const token = localStorage.getItem("token")
      const response = await fetch(`/api/tasks/${taskId}/action-steps`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: stepTitle }),
      })

      if (!response.ok) {
        throw new Error("Failed to add action step")
      }

      const data = await response.json()
      setTasks((prev) =>
        prev.map((t) =>
          t.id === taskId
            ? {
                ...t,
                actionSteps: [...(t.actionSteps || []), data.actionStep],
              }
            : t
        )
      )
    } catch (error) {
      console.error("Add action step error:", error)
    }
  }, [])

  const updateActionStepStatus = useCallback(
    async (taskId: string, stepId: string, completed: boolean) => {
      try {
        const token = localStorage.getItem("token")
        const response = await fetch(`/api/tasks/${taskId}/action-steps/${stepId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ completed }),
        })

        if (!response.ok) {
          throw new Error("Failed to update action step")
        }

        const data = await response.json()
        setTasks((prev) =>
          prev.map((t) =>
            t.id === taskId
              ? {
                  ...t,
                  actionSteps: (t.actionSteps || []).map((step) =>
                    step.id === stepId ? data.actionStep : step
                  ),
                }
              : t
          )
        )
      } catch (error) {
        console.error("Update action step status error:", error)
      }
    },
    []
  )

  const deleteActionStep = useCallback(
    async (taskId: string, stepId: string) => {
      // Only admin can delete action steps
      if (currentRole !== "admin") {
        console.warn("[v0] Only admin can delete action steps")
        return
      }

      try {
        const token = localStorage.getItem("token")
        const response = await fetch(`/api/tasks/${taskId}/action-steps/${stepId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error("Failed to delete action step")
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
      } catch (error) {
        console.error("Delete action step error:", error)
      }
    },
    [currentRole]
  )

  const addStepNote = useCallback(
    async (taskId: string, stepId: string, content: string) => {
      if (!currentUser) return
      try {
        const token = localStorage.getItem("token")
        const response = await fetch(`/api/tasks/${taskId}/action-steps/${stepId}/notes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ content }),
        })

        if (!response.ok) {
          throw new Error("Failed to add step note")
        }

        const data = await response.json()
        setTasks((prev) =>
          prev.map((t) =>
            t.id === taskId
              ? {
                  ...t,
                  actionSteps: (t.actionSteps || []).map((step) =>
                    step.id === stepId
                      ? {
                          ...step,
                          notes: [...step.notes, data.note],
                        }
                      : step
                  ),
                }
              : t
          )
        )
      } catch (error) {
        console.error("Add step note error:", error)
      }
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

  // Session restoration
  useEffect(() => {
    const restoreSession = async () => {
      const token = localStorage.getItem("token")
      if (!token || currentUser) return

      try {
        const response = await fetch("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })

        if (response.ok) {
          const data = await response.json()
          setCurrentUser(data.user)
          setCurrentRole(data.user.role.toLowerCase() as UserRole)
        } else {
          // Token expired or invalid
          localStorage.removeItem("token")
        }
      } catch (error) {
        console.error("Session restoration error:", error)
      }
    }

    restoreSession()
  }, [currentUser])

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;
      
      try {
        const token = localStorage.getItem('token');
        const headers = { 'Authorization': `Bearer ${token}` };

        // Fetch Tasks (Only if not already fetched or to refresh)
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
