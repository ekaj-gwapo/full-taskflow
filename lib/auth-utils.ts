import jwt from "jsonwebtoken"
import { NextRequest } from "next/server"

export interface JWTPayload {
  id: string
  email: string
  role: string
}

export function verifyJWT(token: string): JWTPayload | null {
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your-secret-key"
    ) as JWTPayload
    return decoded
  } catch (error) {
    return null
  }
}

export function getTokenFromRequest(request: NextRequest): string | null {
  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null
  }
  return authHeader.substring(7)
}

export function requireAuth(request: NextRequest) {
  const token = getTokenFromRequest(request)
  if (!token) {
    return { error: "Unauthorized", status: 401, user: null }
  }

  const user = verifyJWT(token)
  if (!user) {
    return { error: "Invalid token", status: 401, user: null }
  }

  return { error: null, status: 200, user }
}

export function requireAdmin(request: NextRequest) {
  const auth = requireAuth(request)
  if (auth.error || auth.user?.role !== "ADMIN") {
    return { error: "Admin access required", status: 403, user: null }
  }
  return auth
}
