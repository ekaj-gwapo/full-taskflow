import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth-utils";
import db from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const auth = requireAuth(request);
    if (auth.error) {
       return NextResponse.json({ error: auth.error }, { status: auth.status });
    }

    const userId = auth.user!.id;
    const user = db.prepare("SELECT id, name, email, role, phone, location FROM users WHERE id = ?").get(userId);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error: any) {
    console.error("ME ERROR:", error);
    return NextResponse.json({ error: "Failed to fetch user context", details: error.message }, { status: 500 });
  }
}
