import Database from 'better-sqlite3';
import path from 'path';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

const dbPath = path.resolve(process.cwd(), 'local.db');
const db = new Database(dbPath);

async function seedData() {
  try {
    // Create sample employees
    const employee1Id = uuidv4();
    const employee2Id = uuidv4();
    const adminId = uuidv4();

    const hashedPassword = await bcrypt.hash('Password123!', 10);

    // Insert employees
    db.prepare(`
      INSERT OR IGNORE INTO users (id, name, email, password, role, phone, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `).run(employee1Id, 'John Doe', 'john@example.com', hashedPassword, 'EMPLOYEE', '555-0001');

    db.prepare(`
      INSERT OR IGNORE INTO users (id, name, email, password, role, phone, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `).run(employee2Id, 'Jane Smith', 'jane@example.com', hashedPassword, 'EMPLOYEE', '555-0002');

    // Insert admin
    db.prepare(`
      INSERT OR IGNORE INTO users (id, name, email, password, role, phone, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `).run(adminId, 'Admin User', 'admin@example.com', hashedPassword, 'ADMIN', '555-0000');

    // Create sample tasks assigned to employees
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const task1Id = uuidv4();
    db.prepare(`
      INSERT OR IGNORE INTO tasks (id, title, description, priority, status, dueDate, assigneeId, createdById, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `).run(
      task1Id,
      'Complete project documentation',
      'Write comprehensive documentation for the new feature',
      'HIGH',
      'TODO',
      tomorrow.toISOString(),
      employee1Id,
      adminId
    );

    const task2Id = uuidv4();
    db.prepare(`
      INSERT OR IGNORE INTO tasks (id, title, description, priority, status, dueDate, assigneeId, createdById, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `).run(
      task2Id,
      'Review code changes',
      'Review the pull request and provide feedback',
      'MEDIUM',
      'IN_PROGRESS',
      tomorrow.toISOString(),
      employee1Id,
      adminId
    );

    const task3Id = uuidv4();
    db.prepare(`
      INSERT OR IGNORE INTO tasks (id, title, description, priority, status, dueDate, assigneeId, createdById, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `).run(
      task3Id,
      'Update database schema',
      'Migrate the database to support new requirements',
      'HIGH',
      'TODO',
      tomorrow.toISOString(),
      employee2Id,
      adminId
    );

    const task4Id = uuidv4();
    db.prepare(`
      INSERT OR IGNORE INTO tasks (id, title, description, priority, status, dueDate, assigneeId, createdById, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `).run(
      task4Id,
      'Write unit tests',
      'Increase test coverage for the authentication module',
      'MEDIUM',
      'COMPLETED',
      tomorrow.toISOString(),
      employee2Id,
      adminId
    );

    // Add action steps to a task
    const step1Id = uuidv4();
    db.prepare(`
      INSERT OR IGNORE INTO action_steps (id, title, completed, taskId, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, datetime('now'), datetime('now'))
    `).run(step1Id, 'Create documentation template', 0, task1Id);

    const step2Id = uuidv4();
    db.prepare(`
      INSERT OR IGNORE INTO action_steps (id, title, completed, taskId, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, datetime('now'), datetime('now'))
    `).run(step2Id, 'Write implementation guide', 0, task1Id);

    console.log('✅ Successfully seeded sample data:');
    console.log('');
    console.log('Employee Users:');
    console.log('  Email: john@example.com | Password: Password123!');
    console.log('  Email: jane@example.com | Password: Password123!');
    console.log('');
    console.log('Admin User:');
    console.log('  Email: admin@example.com | Password: Password123!');
    console.log('');
    console.log('Sample Tasks:');
    console.log('  ✓ Complete project documentation (John - TODO)');
    console.log('  ✓ Review code changes (John - IN_PROGRESS)');
    console.log('  ✓ Update database schema (Jane - TODO)');
    console.log('  ✓ Write unit tests (Jane - COMPLETED)');
  } catch (error: any) {
    console.error('Error seeding data:', error.message);
  }
}

seedData();
