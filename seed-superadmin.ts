import Database from 'better-sqlite3';
import path from 'path';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

const dbPath = path.resolve(process.cwd(), 'local.db');
const db = new Database(dbPath);

async function seed() {
  const email = 'super-admin@taskflow.com';
  const password = 'SuperAdmin123!';
  const hashedPassword = await bcrypt.hash(password, 10);
  const id = uuidv4();

  try {
    db.prepare(`
      INSERT INTO users (id, name, email, password, role)
      VALUES (?, ?, ?, ?, ?)
    `).run(id, 'Super Admin', email, hashedPassword, 'SUPERADMIN');
    
    console.log('Successfully added SUPER ADMIN user:');
    console.log('Email:', email);
    console.log('Password:', password);
  } catch (error: any) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      console.log('Super Admin user already exists.');
    } else {
      console.error('Error seeding super admin:', error.message);
    }
  }
}

seed();
