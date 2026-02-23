"use client"

import { TaskProvider, useTaskContext } from "@/lib/task-context"
import { LoginScreen } from "@/components/login-screen"
import { AppHeader } from "@/components/app-header"
import { AdminDashboard } from "@/components/admin-dashboard"
import { EmployeeDashboard } from "@/components/employee-dashboard"

function AppContent() {
  const { currentUser, currentRole } = useTaskContext()

  if (!currentUser || !currentRole) {
    return <LoginScreen />
  }

  return (
    <div className="flex flex-col h-screen">
      <AppHeader />
      <main className="flex-1 flex min-h-0">
        {currentRole === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
      </main>
    </div>
  )
}

export default function Page() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  )
}
