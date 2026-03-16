"use client"

import { TaskProvider, useTaskContext } from "@/lib/task-context"
import { AppHeader } from "@/components/app-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { UserManagement } from "@/components/user-management"
import { LoginScreen } from "@/components/login-screen"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

function SuperAdminContent() {
  const { currentUser, currentRole } = useTaskContext()
  const router = useRouter()

  useEffect(() => {
    if (currentUser && currentRole !== "superadmin") {
      router.push("/")
    }
  }, [currentUser, currentRole, router])

  if (!currentUser) {
    return <LoginScreen />
  }

  if (currentRole !== "superadmin") {
    return null
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <AppHeader />
      <main className="flex-1 flex min-h-0 overflow-hidden">
        {/* We reuse the AdminSidebar but it might need adjustments for superadmin later */}
        <div className="hidden lg:block w-80 shrink-0 border-r border-border">
          <AdminSidebar
            selectedEmployeeId={null}
            onSelectEmployee={() => {}}
          />
        </div>
        <div className="flex-1 overflow-y-auto bg-secondary/10">
          <UserManagement />
        </div>
      </main>
    </div>
  )
}

export default function SuperAdminPage() {
  return (
    <TaskProvider>
      <SuperAdminContent />
    </TaskProvider>
  )
}
