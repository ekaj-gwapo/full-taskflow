const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = path.resolve(process.cwd(), 'local.db');
const db = new Database(dbPath);

const tasks = db.prepare('SELECT id, title, status, assigneeId FROM tasks').all();
const users = db.prepare('SELECT id, name, email, role FROM users').all();

const result = {
  tasks,
  users
};

fs.writeFileSync('db_inspect_result.json', JSON.stringify(result, null, 2));
console.log('Results written to db_inspect_result.json');

db.close();
