import { execSync } from 'child_process';

console.log('[v0] Running Prisma setup...');

try {
  // Generate Prisma Client
  console.log('[v0] Generating Prisma Client...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  console.log('[v0] ✓ Prisma Client generated successfully');

  // Run migrations
  console.log('[v0] Running database migrations...');
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });
  console.log('[v0] ✓ Database migrations completed');

  console.log('[v0] Setup complete!');
} catch (error) {
  console.error('[v0] Setup failed:', error.message);
  process.exit(1);
}
