import { Pool } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new Pool({ connectionString });

export const db = {
  async query(text: string, params?: any[]) {
    try {
      const result = await pool.query(text, params);
      return result;
    } catch (error) {
      console.error('Database query error:', error);
      throw error;
    }
  },

  async execute(text: string, params?: any[]) {
    return this.query(text, params);
  },

  async getOne(text: string, params?: any[]) {
    const result = await this.query(text, params);
    return result.rows[0] || null;
  },

  async getAll(text: string, params?: any[]) {
    const result = await this.query(text, params);
    return result.rows;
  },
};

export default db;
