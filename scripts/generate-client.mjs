import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

console.log('[v0] Generating Prisma Client...');
console.log('[v0] Project root:', projectRoot);

try {
  process.chdir(projectRoot);
  execSync('npx prisma generate', { stdio: 'inherit' });
  console.log('[v0] ✓ Prisma Client generated successfully');
} catch (error) {
  console.error('[v0] ✗ Failed to generate Prisma Client:', error.message);
  process.exit(1);
}
