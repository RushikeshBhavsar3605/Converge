import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // ensures fresh response (no caching)

export async function GET() {
  return NextResponse.json(
    {
      status: "OK",
      message: "Your API is running",
      timestamp: new Date().toISOString(),
    },
    { status: 200 },
  );
}
