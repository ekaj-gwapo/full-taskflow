import Database from 'better-sqlite3';
import path from 'path';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

const dbPath = path.resolve(process.cwd(), 'local.db');
const db = new Database(dbPath);

async function verify() {
  console.log('--- Verification Started ---');

  // Initialize schema
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'EMPLOYEE',
      phone TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS tasks (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      priority TEXT DEFAULT 'MEDIUM',
      status TEXT DEFAULT 'TODO',
      dueDate DATETIME,
      assigneeId TEXT,
      createdById TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (assigneeId) REFERENCES users(id),
      FOREIGN KEY (createdById) REFERENCES users(id)
    );
  `);

  // 1. Check tables
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log('Tables in database:', tables.map((t: any) => t.name).join(', '));

  // 2. Create a test admin user
  const adminId = uuidv4();
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  try {
    db.prepare(`
      INSERT INTO users (id, name, email, password, role)
      VALUES (?, ?, ?, ?, ?)
    `).run(adminId, 'Admin User', 'admin@example.com', hashedPassword, 'ADMIN');
    console.log('Test admin user created.');
  } catch (e: any) {
    console.log('Admin user might already exist:', e.message);
  }

  // 3. Verify user exists
  const user: any = db.prepare("SELECT * FROM users WHERE email = ?").get('admin@example.com');
  if (user) {
    console.log('Successfully fetched user:', user.email, 'Role:', user.role);
  } else {
    console.error('Failed to fetch user!');
    process.exit(1);
  }

  // 4. Test Task Creation
  const taskId = uuidv4();
  db.prepare(`
    INSERT INTO tasks (id, title, description, priority, assigneeId, createdById, dueDate)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(taskId, 'Test Task', 'This is a test task', 'HIGH', adminId, adminId, new Date().toISOString());
  console.log('Test task created.');

  // 5. Verify Task
  const task: any = db.prepare("SELECT * FROM tasks WHERE id = ?").get(taskId);
  if (task) {
    console.log('Successfully fetched task:', task.title);
  } else {
    console.error('Failed to fetch task!');
    process.exit(1);
  }

  console.log('--- Verification Successful ---');
}

verify().catch(console.error);
