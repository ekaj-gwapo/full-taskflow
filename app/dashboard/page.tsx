"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { TaskProvider, useTaskContext } from "@/lib/task-context"
import { LoginScreen } from "@/components/login-screen"
import { AppHeader } from "@/components/app-header"
import { AdminDashboard } from "@/components/admin-dashboard"
import { EmployeeDashboard } from "@/components/employee-dashboard"
import { UserManagement } from "@/components/user-management"
import { AdminSidebar } from "@/components/admin-sidebar"

function AppContent() {
  const { currentUser, currentRole } = useTaskContext()
  const router = useRouter()

  useEffect(() => {
    if (!currentUser || !currentRole) {
      router.push("/auth/login")
    }
  }, [currentUser, currentRole, router])

  if (!currentUser || !currentRole) {
    return null // Or a loading spinner
  }

  return (
    <div className="flex flex-col h-screen">
      <AppHeader />
      <main className="flex-1 flex min-h-0">
        {currentRole === "superadmin" ? (
          <div className="flex-1 flex min-h-0">
            <div className="hidden lg:block w-80 shrink-0 border-r border-border">
              <AdminSidebar selectedEmployeeId={null} onSelectEmployee={() => {}} />
            </div>
            <div className="flex-1 overflow-y-auto bg-secondary/10">
              <UserManagement />
            </div>
          </div>
        ) : currentRole === "admin" ? (
          <AdminDashboard />
        ) : (
          <EmployeeDashboard />
        )}
      </main>
    </div>
  )
}

export default function Page() {
  return <AppContent />
}
