import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'local.db');
const db = new Database(dbPath);

function cleanup() {
  console.log('--- Database Cleanup Started ---');

  try {
    // Delete all tasks and related data
    db.prepare("DELETE FROM step_notes").run();
    db.prepare("DELETE FROM progress_notes").run();
    db.prepare("DELETE FROM action_steps").run();
    db.prepare("DELETE FROM tasks").run();
    
    // Delete users that are NOT the admins we just created
    // We keep 'admin@taskflow.com' and 'super-admin@taskflow.com'
    db.prepare("DELETE FROM users WHERE email NOT IN (?, ?)").run('admin@taskflow.com', 'super-admin@taskflow.com');
    
    console.log('Successfully cleared all tasks and non-admin users.');
  } catch (error: any) {
    console.error('Cleanup error:', error.message);
  }

  console.log('--- Cleanup Successful ---');
}

cleanup();
