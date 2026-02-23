"use client"

import { useTaskContext } from "@/lib/task-context"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { LayoutDashboard, LogOut } from "lucide-react"

export function AppHeader() {
  const { currentUser, currentRole, logout } = useTaskContext()

  if (!currentUser) return null

  const initials = currentUser.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-3">
          {/* Logo Placeholder - Replace with your logo */}
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary hover:bg-primary/90 transition-colors" title="Click to upload your logo">
            <LayoutDashboard className="h-5 w-5 text-primary-foreground" />
          </div>
          {/* To add your logo: Replace the above div with: <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-lg object-contain" /> */}
          
          <span className="font-semibold text-foreground tracking-tight">TaskFlow</span>
          <span className="hidden sm:inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
            {currentRole === "admin" ? "Admin" : "Employee"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <Avatar className="h-7 w-7">
              <AvatarFallback className="bg-secondary text-foreground text-xs">
                {initials}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-foreground">{currentUser.name}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={logout}
            className="text-muted-foreground hover:text-foreground hover:bg-secondary"
          >
            <LogOut className="h-4 w-4" />
            <span className="sr-only">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
