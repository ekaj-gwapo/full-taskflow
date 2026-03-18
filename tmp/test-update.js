const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.resolve(process.cwd(), 'local.db');
const db = new Database(dbPath);

function testUpdate() {
    try {
        // 1. Get a task
        const task = db.prepare("SELECT * FROM tasks LIMIT 1").get();
        if (!task) {
            console.log("No tasks found to test update.");
            return;
        }

        console.log("Current ID:", task.id);
        console.log("Current status:", task.status);

        // 2. Simulate update to IN_PROGRESS
        const status = "in-progress";
        const dbStatus = status ? status.toUpperCase().replace('-', '_') : null;
        const priority = null;
        const completedAt = null;

        console.log("Updating to:", dbStatus);

        const result = db.prepare(`
          UPDATE tasks 
          SET status = COALESCE(?, status), 
              priority = COALESCE(?, priority),
              completedAt = ?,
              updatedAt = CURRENT_TIMESTAMP
          WHERE id = ?
        `).run(dbStatus, priority, completedAt || task.completedAt, task.id);

        console.log("Changes made:", result.changes);

        // 3. Verify
        const updatedTask = db.prepare("SELECT * FROM tasks WHERE id = ?").get(task.id);
        console.log("Updated status:", updatedTask.status);
        
        if (updatedTask.status === dbStatus) {
            console.log("SUCCESS: Task status updated.");
        } else {
            console.log("FAILURE: Task status not updated.");
        }
    } catch (error) {
        console.error("DEBUG ERROR:", error);
    }
}

testUpdate();
