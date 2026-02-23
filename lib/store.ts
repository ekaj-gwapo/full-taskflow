export type UserRole = "admin" | "employee"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
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

// Mock employees
export const employees: User[] = [
  { id: "emp-1", name: "Arnel Esto", email: "alex@taskflow.io", role: "employee" },
  { id: "emp-2", name: "Renna Joy", email: "jordan@taskflow.io", role: "employee" },
  { id: "emp-3", name: "Rica Faye", email: "sam@taskflow.io", role: "employee" },
  { id: "emp-4", name: "Princess Dawn", email: "morgan@taskflow.io", role: "employee" },
  { id: "emp-5", name: "Sevinee Mae", email: "casey@taskflow.io", role: "employee" },
]

export const adminUser: User = {
  id: "admin-1",
  name: "Sir Mark",
  email: "taylor@taskflow.io",
  role: "admin",
}

const now = new Date()
const today = now.toISOString().split("T")[0]
const yesterday = new Date(now.getTime() - 86400000).toISOString().split("T")[0]
const twoDaysAgo = new Date(now.getTime() - 2 * 86400000).toISOString().split("T")[0]
const threeDaysAgo = new Date(now.getTime() - 3 * 86400000).toISOString().split("T")[0]
const inTwoDays = new Date(now.getTime() + 2 * 86400000).toISOString().split("T")[0]
const inFiveDays = new Date(now.getTime() + 5 * 86400000).toISOString().split("T")[0]
const inSevenDays = new Date(now.getTime() + 7 * 86400000).toISOString().split("T")[0]
const pastDue = new Date(now.getTime() - 4 * 86400000).toISOString().split("T")[0]

export const initialTasks: Task[] = [
  {
    id: "task-1",
    title: "Design homepage wireframes",
    description: "Create initial wireframe concepts for the new homepage layout including hero section, features grid, and CTA blocks.",
    status: "completed",
    priority: "high",
    assigneeId: "emp-1",
    assigneeName: "Alex Rivera",
    createdAt: threeDaysAgo,
    dueDate: yesterday,
    completedAt: new Date(now.getTime() - 86400000 + 7200000).toISOString(),
    progressNotes: [
      { id: "note-1", taskId: "task-1", authorId: "emp-1", authorName: "Alex Rivera", content: "Finished initial wireframe layouts for desktop. Moving on to mobile versions.", timestamp: new Date(now.getTime() - 2 * 86400000 + 3600000).toISOString() },
      { id: "note-2", taskId: "task-1", authorId: "emp-1", authorName: "Alex Rivera", content: "Mobile wireframes are done. Cleaning up spacing and alignment.", timestamp: new Date(now.getTime() - 2 * 86400000 + 5400000).toISOString() },
      { id: "note-3", taskId: "task-1", authorId: "emp-1", authorName: "Alex Rivera", content: "All wireframes finalized and exported to Figma.", timestamp: new Date(now.getTime() - 86400000 + 7200000).toISOString() },
    ],
    actionSteps: [
      {
        id: "step-1-1",
        title: "Create desktop wireframes",
        completed: true,
        notes: [
          { id: "step-note-1", content: "Completed hero section design", timestamp: new Date(now.getTime() - 2 * 86400000).toISOString(), authorName: "Alex Rivera" },
        ],
      },
      {
        id: "step-1-2",
        title: "Create mobile wireframes",
        completed: true,
        notes: [
          { id: "step-note-2", content: "Mobile layout responsive and optimized", timestamp: new Date(now.getTime() - 86400000).toISOString(), authorName: "Alex Rivera" },
        ],
      },
      {
        id: "step-1-3",
        title: "Export to Figma",
        completed: true,
        notes: [],
      },
    ],
  },
  {
    id: "task-2",
    title: "Set up CI/CD pipeline",
    description: "Configure GitHub Actions for automated testing and deployment to staging environment.",
    status: "in-progress",
    priority: "high",
    assigneeId: "emp-2",
    assigneeName: "Jordan Chen",
    createdAt: twoDaysAgo,
    dueDate: inTwoDays,
    completedAt: null,
    progressNotes: [
      { id: "note-4", taskId: "task-2", authorId: "emp-2", authorName: "Jordan Chen", content: "Set up base workflow file. Working on test runner config.", timestamp: new Date(now.getTime() - 3600000).toISOString() },
      { id: "note-5", taskId: "task-2", authorId: "emp-2", authorName: "Jordan Chen", content: "Tests running in CI now. Adding deploy step to staging.", timestamp: new Date(now.getTime() - 1800000).toISOString() },
    ],
    actionSteps: [
      {
        id: "step-2-1",
        title: "Configure GitHub Actions workflow",
        completed: true,
        notes: [
          { id: "step-note-3", content: "Created .github/workflows/ci.yml file", timestamp: new Date(now.getTime() - 7200000).toISOString(), authorName: "Jordan Chen" },
        ],
      },
      {
        id: "step-2-2",
        title: "Set up test runner in CI",
        completed: true,
        notes: [
          { id: "step-note-4", content: "Added Jest and test commands to workflow", timestamp: new Date(now.getTime() - 5400000).toISOString(), authorName: "Jordan Chen" },
        ],
      },
      {
        id: "step-2-3",
        title: "Add deployment step to staging",
        completed: false,
        notes: [
          { id: "step-note-5", content: "Currently working on staging deployment config", timestamp: new Date(now.getTime() - 1800000).toISOString(), authorName: "Jordan Chen" },
        ],
      },
    ],
  },
  {
    id: "task-3",
    title: "Write API documentation",
    description: "Document all REST API endpoints with request/response examples using OpenAPI spec.",
    status: "in-progress",
    priority: "medium",
    assigneeId: "emp-3",
    assigneeName: "Sam Patel",
    createdAt: yesterday,
    dueDate: inFiveDays,
    completedAt: null,
    progressNotes: [
      { id: "note-6", taskId: "task-3", authorId: "emp-3", authorName: "Sam Patel", content: "Documented auth and user endpoints. Moving to task endpoints next.", timestamp: new Date(now.getTime() - 7200000).toISOString() },
    ],
    actionSteps: [
      {
        id: "step-3-1",
        title: "Document authentication endpoints",
        completed: true,
        notes: [
          { id: "step-note-6", content: "Added POST /auth/login, POST /auth/register, POST /auth/logout endpoints", timestamp: new Date(now.getTime() - 7200000).toISOString(), authorName: "Sam Patel" },
        ],
      },
      {
        id: "step-3-2",
        title: "Document user management endpoints",
        completed: true,
        notes: [],
      },
      {
        id: "step-3-3",
        title: "Document task endpoints",
        completed: false,
        notes: [
          { id: "step-note-7", content: "Currently documenting GET /tasks, POST /tasks, PUT /tasks/:id", timestamp: new Date(now.getTime() - 7200000).toISOString(), authorName: "Sam Patel" },
        ],
      },
      {
        id: "step-3-4",
        title: "Generate OpenAPI spec",
        completed: false,
        notes: [],
      },
    ],
  },
  {
    id: "task-4",
    title: "Implement user authentication",
    description: "Build login/register flow with JWT tokens, password hashing, and session management.",
    status: "todo",
    priority: "high",
    assigneeId: "emp-4",
    assigneeName: "Morgan Lee",
    createdAt: today,
    dueDate: inSevenDays,
    completedAt: null,
    progressNotes: [],
  },
  {
    id: "task-5",
    title: "Database schema optimization",
    description: "Review and optimize existing database queries. Add missing indexes for commonly queried fields.",
    status: "in-progress",
    priority: "medium",
    assigneeId: "emp-5",
    assigneeName: "Casey Kim",
    createdAt: twoDaysAgo,
    dueDate: pastDue,
    completedAt: null,
    progressNotes: [
      { id: "note-7", taskId: "task-5", authorId: "emp-5", authorName: "Casey Kim", content: "Identified 3 slow queries in task listing. Adding composite indexes.", timestamp: new Date(now.getTime() - 86400000).toISOString() },
      { id: "note-8", taskId: "task-5", authorId: "emp-5", authorName: "Casey Kim", content: "Indexes added. Query time reduced from 800ms to 45ms on test data.", timestamp: new Date(now.getTime() - 43200000).toISOString() },
    ],
  },
  {
    id: "task-6",
    title: "Design system component library",
    description: "Build reusable React component library with buttons, inputs, cards, and modals.",
    status: "todo",
    priority: "low",
    assigneeId: "emp-1",
    assigneeName: "Alex Rivera",
    createdAt: today,
    dueDate: inSevenDays,
    completedAt: null,
    progressNotes: [],
  },
  {
    id: "task-7",
    title: "Performance audit",
    description: "Run Lighthouse audits and identify key performance bottlenecks in the application.",
    status: "completed",
    priority: "medium",
    assigneeId: "emp-2",
    assigneeName: "Jordan Chen",
    createdAt: threeDaysAgo,
    dueDate: twoDaysAgo,
    completedAt: new Date(now.getTime() - 2 * 86400000 + 3600000).toISOString(),
    progressNotes: [
      { id: "note-9", taskId: "task-7", authorId: "emp-2", authorName: "Jordan Chen", content: "Lighthouse score: Performance 62, Accessibility 89. Main bottlenecks are large bundle size and unoptimized images.", timestamp: new Date(now.getTime() - 3 * 86400000 + 7200000).toISOString() },
      { id: "note-10", taskId: "task-7", authorId: "emp-2", authorName: "Jordan Chen", content: "Created detailed report with recommendations. Performance can improve to 90+ with suggested changes.", timestamp: new Date(now.getTime() - 2 * 86400000 + 3600000).toISOString() },
    ],
  },
  {
    id: "task-8",
    title: "Set up error monitoring",
    description: "Integrate Sentry for error tracking and alerting across the application.",
    status: "todo",
    priority: "medium",
    assigneeId: "emp-3",
    assigneeName: "Sam Patel",
    createdAt: today,
    dueDate: inFiveDays,
    completedAt: null,
    progressNotes: [],
  },
]

export const initialReports: WeeklyReport[] = [
  {
    id: "report-1",
    weekStart: new Date(now.getTime() - 7 * 86400000).toISOString().split("T")[0],
    weekEnd: yesterday,
    createdAt: today,
    summary: "Strong week with 2 major tasks completed including homepage wireframes and performance audit. CI/CD pipeline and API documentation are progressing well. Database optimization is overdue and needs attention. Three new tasks were assigned for the upcoming week.",
    completedCount: 2,
    inProgressCount: 3,
    overdueCount: 1,
    todoCount: 3,
  },
]
