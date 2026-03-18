import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'local.db');
const db = new Database(dbPath);

async function testUpdate() {
    // 1. Get a task
    const task = db.prepare("SELECT * FROM tasks LIMIT 1").get() as any;
    if (!task) {
        console.log("No tasks found to test update.");
        return;
    }

    console.log("Current status:", task.status);

    // 2. Simulate update to IN_PROGRESS
    const status = "in-progress";
    const dbStatus = status ? status.toUpperCase().replace('-', '_') : null;
    const priority = null;
    const completedAt = null;

    console.log("Updating to:", dbStatus);

    db.prepare(`
      UPDATE tasks 
      SET status = COALESCE(?, status), 
          priority = COALESCE(?, priority),
          completedAt = ?,
          updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(dbStatus, priority, completedAt || task.completedAt, task.id);

    // 3. Verify
    const updatedTask = db.prepare("SELECT * FROM tasks WHERE id = ?").get(task.id) as any;
    console.log("Updated status:", updatedTask.status);
    
    if (updatedTask.status === "IN_PROGRESS") {
        console.log("SUCCESS: Task status updated.");
    } else {
        console.log("FAILURE: Task status not updated.");
    }
}

testUpdate().catch(console.error);
