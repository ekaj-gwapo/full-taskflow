# TaskFlow - Complete Deployment Guide

This guide will walk you through deploying your fully functional TaskFlow system to production with PostgreSQL on Neon and backend on Vercel.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step 1: Setup Neon Database](#step-1-setup-neon-database)
3. [Step 2: Setup Local Environment](#step-2-setup-local-environment)
4. [Step 3: Deploy to Vercel](#step-3-deploy-to-vercel)
5. [Step 4: Run Database Migrations](#step-4-run-database-migrations)
6. [Step 5: Testing](#step-5-testing)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- Node.js 18+ installed locally
- GitHub account with your TaskFlow repository
- Neon account (free at https://neon.tech)
- Vercel account (free at https://vercel.com)
- Git command line installed

---

## Step 1: Setup Neon Database

### 1.1 Create Neon Account and Database

1. Go to https://neon.tech
2. Sign up with email or GitHub
3. Create a new project
4. You'll automatically get a PostgreSQL database
5. Click on your project and go to the "Connection Details" tab
6. Copy the connection string that looks like:
   ```
   postgresql://neondb_owner:AbCdEfGhIjKlMnOpQrStUvWxYz@ep-cool-moon-12345678.us-east-1.neon.tech/neondb?sslmode=require
   ```

### 1.2 Save Your Connection String

Keep this connection string safe - you'll need it for the next steps.

---

## Step 2: Setup Local Environment

### 2.1 Install Dependencies

```bash
# Install all required packages
npm install @prisma/client bcryptjs jsonwebtoken
npm install -D prisma @types/jsonwebtoken
```

### 2.2 Create Environment File

Create a `.env.local` file in your project root:

```
DATABASE_URL="your-neon-connection-string-here"
JWT_SECRET="generate-a-strong-random-string-here"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

**How to generate JWT_SECRET:**
```bash
# Run this in terminal (on Mac/Linux)
openssl rand -base64 32

# Or use this online tool: https://www.lastpass.com/features/password-generator
# Make it at least 32 characters long
```

### 2.3 Create Database Schema

```bash
# Generate Prisma client
npx prisma generate

# Create all tables in your Neon database
npx prisma db push
```

You should see output like:
```
✔ Your database is now in sync with your schema.
```

### 2.4 Test Locally (Optional)

```bash
npm run dev
```

Visit http://localhost:3000 and test the registration and login forms.

---

## Step 3: Deploy to Vercel

### 3.1 Push to GitHub

Make sure all changes are committed:

```bash
git add .
git commit -m "Add complete backend and authentication system"
git push origin main
```

### 3.2 Deploy on Vercel

1. Go to https://vercel.com and log in
2. Click "New Project"
3. Select your GitHub repository (ekaj-gwapo/updatedtaskflow)
4. Choose the branch to deploy (main or task-assignment-view)
5. Click "Import"

### 3.3 Add Environment Variables on Vercel

In the "Environment Variables" section of Vercel:

1. Add `DATABASE_URL` → Your Neon connection string
2. Add `JWT_SECRET` → Your secret key (use the same one as .env.local)
3. Leave `NEXT_PUBLIC_API_URL` empty (Vercel will auto-fill with your domain)

**Important:** Check "Sensitive" for both DATABASE_URL and JWT_SECRET

### 3.4 Deploy

Click "Deploy" and wait for the deployment to complete.

After deployment, you'll get a URL like:
```
https://your-project.vercel.app
```

---

## Step 4: Run Database Migrations

After Vercel deployment completes, you need to run migrations on the production database.

### Option 1: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI if you don't have it
npm i -g vercel

# Login to Vercel
vercel login

# Run migrations on production
vercel env pull
npx prisma migrate deploy
```

### Option 2: Manual Database Sync

```bash
# Set DATABASE_URL to your production Neon string
export DATABASE_URL="your-neon-connection-string"

# Sync database
npx prisma db push
```

---

## Step 5: Testing

### 5.1 Test Registration

1. Go to your Vercel URL (https://your-project.vercel.app)
2. Click "Register here"
3. Fill in:
   - Name: John Doe
   - Email: john@example.com
   - Password: password123
4. Click "Create Account"
5. You should be logged in to the employee dashboard

### 5.2 Test Admin (If You Have Admin Access)

For admin access, you need to manually update the user role in the database:

```bash
npx prisma studio

# Navigate to the User table
# Find your user record
# Change role from "EMPLOYEE" to "ADMIN"
# Click Save
```

### 5.3 Test Tasks (Admin Only)

1. Login as admin
2. Create a task by filling out the form
3. Assign it to an employee
4. The employee should see the task in their dashboard

### 5.4 Test Action Steps

1. As an employee, view an assigned task
2. Add an action step
3. Check it off when complete
4. Add progress notes

---

## API Endpoints Reference

All endpoints (except login/register) require the JWT token from login in the Authorization header.

### Authentication
- **POST** `/api/auth/register` - Register new user
- **POST** `/api/auth/login` - Login and get JWT token

### Tasks
- **GET** `/api/tasks` - Get tasks
- **POST** `/api/tasks` - Create task (admin only)
- **PUT** `/api/tasks/[id]` - Update task
- **DELETE** `/api/tasks/[id]` - Delete task (admin only)

### Action Steps
- **POST** `/api/tasks/[id]/action-steps` - Add step
- **PUT** `/api/tasks/[id]/action-steps/[stepId]` - Update step
- **DELETE** `/api/tasks/[id]/action-steps/[stepId]` - Delete step
- **POST** `/api/tasks/[id]/action-steps/[stepId]/notes` - Add note

### Users
- **GET** `/api/users` - Get all users (admin only)
- **GET** `/api/users/[id]` - Get user profile
- **PUT** `/api/users/[id]` - Update profile

---

## Troubleshooting

### Database Connection Error

**Error:** `Can't reach database server`

**Solutions:**
1. Verify DATABASE_URL is correct in Vercel
2. Check Neon dashboard - make sure database is active
3. Try connecting with: `psql "your-connection-string"`

### JWT Token Error

**Error:** `Invalid token` or `Unauthorized`

**Solutions:**
1. Verify JWT_SECRET is set correctly
2. Make sure JWT_SECRET is the same in Vercel as .env.local
3. Clear browser localStorage and login again

### Prisma Migration Error

**Error:** `Migration already applied` or database sync issues

**Solutions:**
```bash
# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Or manually sync
npx prisma db push --skip-generate
```

### Vercel Deployment Failed

Check Vercel build logs:
1. Go to your Vercel project
2. Click "Deployments"
3. Click the failed deployment
4. Check the "Build Logs" for errors

Common fixes:
- Missing dependencies: `npm install`
- Environment variables not set correctly
- TypeScript errors: `npm run build`

### Cannot Register Users

**Error:** `Email already registered` or validation errors

**Check:**
1. Is DATABASE_URL correctly set?
2. Try registering with a different email
3. Check Vercel logs for detailed errors

---

## Production Checklist

Before sharing with your client:

- [ ] Test user registration
- [ ] Test user login
- [ ] Test admin creating tasks
- [ ] Test employee viewing tasks
- [ ] Test action steps and notes
- [ ] Test task updates
- [ ] Test logout functionality
- [ ] Verify all data persists after logout/login
- [ ] Test on mobile devices
- [ ] Check Vercel logs for any errors

---

## Next Steps

1. **Add More Admins**: Use Prisma Studio to change user roles
   ```bash
   npx prisma studio
   ```

2. **Backup Database**: Neon provides automatic backups (check their docs)

3. **Monitor Performance**: Use Vercel Analytics and Neon dashboard

4. **Setup Custom Domain**: Add your domain in Vercel project settings

5. **Security Improvements**:
   - Enable CORS restrictions
   - Setup rate limiting
   - Add input validation

---

## Support Resources

- **Neon Documentation**: https://neon.tech/docs
- **Prisma Documentation**: https://www.prisma.io/docs
- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Documentation**: https://nextjs.org/docs

---

## For Your Client

Share these login instructions with your client:

1. Go to: https://your-domain.vercel.app
2. **For Admin Users:**
   - Click "Sign In"
   - Enter admin email and password
   - You can now create tasks and assign them to employees

3. **For Employees:**
   - Click "Sign In" (or "Register here" for new users)
   - View your assigned tasks
   - Update task progress and add notes

---

**You're all set!** Your TaskFlow system is now fully deployed and functional. 🚀
