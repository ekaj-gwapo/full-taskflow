-- Create neon_auth schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS neon_auth;

-- Create user table
CREATE TABLE IF NOT EXISTS neon_auth.user (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    emailVerified BOOLEAN DEFAULT false,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create account table for storing password hashes
CREATE TABLE IF NOT EXISTS neon_auth.account (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    userId UUID NOT NULL REFERENCES neon_auth.user(id) ON DELETE CASCADE,
    providerId VARCHAR(50) DEFAULT 'password',
    accountId VARCHAR(255),
    password VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(userId, providerId)
);

-- Create index on user email for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_email ON neon_auth.user(email);

-- Create index on account userId for faster lookups
CREATE INDEX IF NOT EXISTS idx_account_userId ON neon_auth.account(userId);

-- Create index on account providerId for faster lookups
CREATE INDEX IF NOT EXISTS idx_account_providerId ON neon_auth.account(providerId);
