-- Task Management Database Schema

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  location VARCHAR(255),
  role VARCHAR(50) DEFAULT 'EMPLOYEE',
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create tasks table
CREATE TABLE IF NOT EXISTS tasks (
  id TEXT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'TODO',
  priority VARCHAR(50) DEFAULT 'MEDIUM',
  "dueDate" TIMESTAMP NOT NULL,
  "assigneeId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  "createdById" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "completedAt" TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create action_steps table
CREATE TABLE IF NOT EXISTS action_steps (
  id TEXT PRIMARY KEY,
  "taskId" TEXT NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT false,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create step_notes table
CREATE TABLE IF NOT EXISTS step_notes (
  id TEXT PRIMARY KEY,
  "stepId" TEXT NOT NULL REFERENCES action_steps(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  "authorName" VARCHAR(255) NOT NULL,
  "authorId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create progress_notes table
CREATE TABLE IF NOT EXISTS progress_notes (
  id TEXT PRIMARY KEY,
  "taskId" TEXT NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  "authorName" VARCHAR(255) NOT NULL,
  "authorId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create weekly_reports table
CREATE TABLE IF NOT EXISTS weekly_reports (
  id TEXT PRIMARY KEY,
  "employeeId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  "weekStart" TIMESTAMP NOT NULL,
  "weekEnd" TIMESTAMP NOT NULL,
  summary TEXT NOT NULL,
  "completedCount" INTEGER DEFAULT 0,
  "inProgressCount" INTEGER DEFAULT 0,
  "overdueCount" INTEGER DEFAULT 0,
  "todoCount" INTEGER DEFAULT 0,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_tasks_assigneeId ON tasks("assigneeId");
CREATE INDEX IF NOT EXISTS idx_tasks_createdById ON tasks("createdById");
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_action_steps_taskId ON action_steps("taskId");
CREATE INDEX IF NOT EXISTS idx_step_notes_stepId ON step_notes("stepId");
CREATE INDEX IF NOT EXISTS idx_step_notes_authorId ON step_notes("authorId");
CREATE INDEX IF NOT EXISTS idx_progress_notes_taskId ON progress_notes("taskId");
CREATE INDEX IF NOT EXISTS idx_progress_notes_authorId ON progress_notes("authorId");
CREATE INDEX IF NOT EXISTS idx_weekly_reports_employeeId ON weekly_reports("employeeId");
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
