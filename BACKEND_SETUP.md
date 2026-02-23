# TaskFlow Backend Setup Guide

## Overview
This guide will help you set up the complete backend infrastructure for TaskFlow using PostgreSQL (Neon) and deploy on Vercel.

## Prerequisites
- Node.js 18+ installed
- Git account
- Neon account (https://neon.tech - free)
- Vercel account (https://vercel.com - free)

## Step 1: Setup Neon PostgreSQL Database

1. Go to https://neon.tech and sign up (free tier available)
2. Create a new project
3. Copy your database connection string (looks like: `postgresql://user:password@host/database`)
4. Keep this connection string safe - you'll need it later

## Step 2: Install Dependencies

```bash
npm install @prisma/client bcryptjs jsonwebtoken
npm install -D prisma @types/jsonwebtoken
```

## Step 3: Setup Prisma

The Prisma schema is already created at `prisma/schema.prisma`

1. Create a `.env.local` file in the root directory:
```
DATABASE_URL="your-neon-connection-string-here"
JWT_SECRET="your-secret-key-here-make-it-long-and-random"
```

2. Run migrations to create database tables:
```bash
npx prisma migrate dev --name init
```

This will create all the necessary tables in your Neon database.

## Step 4: Generate Prisma Client

```bash
npx prisma generate
```

## Step 5: Deploy to Vercel

1. Push your code to GitHub (if not already done):
```bash
git add .
git commit -m "Add backend API"
git push
```

2. Go to https://vercel.com and log in
3. Click "New Project"
4. Select your GitHub repository
5. In the "Environment Variables" section, add:
   - `DATABASE_URL`: Your Neon connection string
   - `JWT_SECRET`: Your secret key

6. Click "Deploy"

## Step 6: Run Initial Migrations on Vercel

After deployment, you need to run migrations on the production database:

```bash
npx prisma migrate deploy
```

Or use a one-off command on Vercel:
```bash
npx prisma db push
```

## API Endpoints

### Authentication
- **POST** `/api/auth/register` - Register a new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- **POST** `/api/auth/login` - Login user
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### Tasks
- **GET** `/api/tasks` - Get all tasks (admin sees all, employee sees own)
- **POST** `/api/tasks` - Create new task (admin only)
  ```json
  {
    "title": "Design Homepage",
    "description": "Create wireframes...",
    "priority": "HIGH",
    "dueDate": "2024-12-31",
    "assigneeId": "user-id",
    "actionSteps": ["Step 1", "Step 2"]
  }
  ```

- **GET** `/api/tasks/[id]` - Get task details
- **PUT** `/api/tasks/[id]` - Update task status
  ```json
  {
    "status": "IN_PROGRESS",
    "priority": "MEDIUM"
  }
  ```

- **DELETE** `/api/tasks/[id]` - Delete task (admin only)

### Action Steps
- **POST** `/api/tasks/[id]/action-steps` - Add action step
  ```json
  {
    "title": "Complete wireframes"
  }
  ```

- **PUT** `/api/tasks/[id]/action-steps/[stepId]` - Update step status
  ```json
  {
    "completed": true
  }
  ```

- **DELETE** `/api/tasks/[id]/action-steps/[stepId]` - Delete step

### Action Step Notes
- **POST** `/api/tasks/[id]/action-steps/[stepId]/notes` - Add note
  ```json
  {
    "content": "Successfully completed the wireframe design"
  }
  ```

### Users
- **GET** `/api/users` - Get all users (admin only)
- **GET** `/api/users/[id]` - Get user profile
- **PUT** `/api/users/[id]` - Update user profile
  ```json
  {
    "name": "John Doe",
    "phone": "+1234567890",
    "location": "New York, USA"
  }
  ```

## Authentication Headers

All API requests (except `/auth/register` and `/auth/login`) require a JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Troubleshooting

### Database Connection Error
- Verify your DATABASE_URL is correct
- Check that your Neon IP is whitelisted (it usually is by default)
- Ensure the connection string has the correct password

### Migration Errors
- Delete `.prisma` folder and run `npx prisma generate` again
- Try `npx prisma db push` instead of `npx prisma migrate deploy`

### JWT Token Errors
- Make sure JWT_SECRET is set in your environment variables
- Token should be included without "Bearer " prefix in the payload

## Next Steps

1. Update frontend components to use these API endpoints
2. Replace the demo login with the real authentication
3. Test all endpoints thoroughly
4. Monitor Vercel logs for any errors

## Support

For issues with:
- Neon: https://neon.tech/docs
- Prisma: https://www.prisma.io/docs
- Vercel: https://vercel.com/docs
