"use client"

import { useState } from "react"
import { useTaskContext } from "@/lib/task-context"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ClipboardList, User, Mail, Phone, MapPin, Save, X } from "lucide-react"

interface EmployeeSidebarProps {
  selectedEmployeeId: string | null
  onSelectEmployee: (employeeId: string | null) => void
}

export function EmployeeSidebar({
  selectedEmployeeId,
  onSelectEmployee,
}: EmployeeSidebarProps) {
  const { currentUser, tasks } = useTaskContext()
  const [activeTab, setActiveTab] = useState<"tasks" | "profile">("tasks")
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [profileData, setProfileData] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    phone: currentUser?.phone || "",
    location: currentUser?.location || "",
  })
  const [tempProfileData, setTempProfileData] = useState(profileData)

  const myTasks = tasks.filter((t) => t.assigneeId === currentUser?.id)

  const handleEditProfile = () => {
    setTempProfileData(profileData)
    setIsEditingProfile(true)
  }

  const handleSaveProfile = () => {
    setProfileData(tempProfileData)
    setIsEditingProfile(false)
  }

  const handleCancelEdit = () => {
    setIsEditingProfile(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setTempProfileData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const initials = currentUser?.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase() || "U"

  return (
    <aside className="w-80 shrink-0 border-r border-border bg-card flex flex-col h-full">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <ClipboardList className="h-5 w-5 text-primary-foreground" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">My Workspace</h2>
        </div>
        {currentUser && (
          <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{currentUser.name}</p>
              <p className="text-xs text-muted-foreground truncate">{currentUser.email}</p>
            </div>
          </div>
        )}
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-1 p-3 border-b border-border">
        <button
          onClick={() => setActiveTab("tasks")}
          className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "tasks"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-muted-foreground hover:bg-accent hover:text-foreground"
          }`}
        >
          <ClipboardList className="h-4 w-4" />
          <span>My Tasks</span>
        </button>
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "profile"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-muted-foreground hover:bg-accent hover:text-foreground"
          }`}
        >
          <User className="h-4 w-4" />
          <span>Profile</span>
        </button>
      </div>

      {/* Content - Scrollable */}
      <ScrollArea className="flex-1">
        <div className="p-4">
          {/* My Tasks Tab */}
          {activeTab === "tasks" && (
            <div className="space-y-3">
              {myTasks.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  <ClipboardList className="h-8 w-8 mx-auto mb-2 text-muted-foreground/50" />
                  <p>No tasks assigned yet</p>
                </div>
              ) : (
                myTasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-3 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{task.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{task.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                              task.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : task.status === "in-progress"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {task.status === "completed" ? "Completed" : task.status === "in-progress" ? "In Progress" : "To Do"}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Due {task.dueDate.includes("T")
                              ? new Date(task.dueDate).toLocaleDateString()
                              : task.dueDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-4">
              {!isEditingProfile ? (
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <Avatar className="h-16 w-16 mx-auto mb-3">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xl font-medium">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-lg border border-border bg-secondary/30">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground font-medium">Name</p>
                      </div>
                      <p className="text-sm font-medium text-foreground">{profileData.name}</p>
                    </div>

                    <div className="p-3 rounded-lg border border-border bg-secondary/30">
                      <div className="flex items-center gap-2 mb-1">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground font-medium">Email</p>
                      </div>
                      <p className="text-sm font-medium text-foreground">{profileData.email}</p>
                    </div>

                    <div className="p-3 rounded-lg border border-border bg-secondary/30">
                      <div className="flex items-center gap-2 mb-1">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground font-medium">Phone</p>
                      </div>
                      <p className="text-sm font-medium text-foreground">{profileData.phone || "Not set"}</p>
                    </div>

                    <div className="p-3 rounded-lg border border-border bg-secondary/30">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground font-medium">Location</p>
                      </div>
                      <p className="text-sm font-medium text-foreground">{profileData.location || "Not set"}</p>
                    </div>
                  </div>

                  <Button
                    onClick={handleEditProfile}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Edit Profile
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-muted-foreground font-medium block mb-1">
                        Name
                      </label>
                      <Input
                        value={tempProfileData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="text-sm"
                        placeholder="Enter name"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground font-medium block mb-1">
                        Email
                      </label>
                      <Input
                        value={tempProfileData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="text-sm"
                        placeholder="Enter email"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground font-medium block mb-1">
                        Phone
                      </label>
                      <Input
                        value={tempProfileData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="text-sm"
                        placeholder="Enter phone"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground font-medium block mb-1">
                        Location
                      </label>
                      <Input
                        value={tempProfileData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        className="text-sm"
                        placeholder="Enter location"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={handleSaveProfile}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button
                      onClick={handleCancelEdit}
                      variant="outline"
                      className="flex-1"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </ScrollArea>
    </aside>
  )
}
