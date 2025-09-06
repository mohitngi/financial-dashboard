// This API route is not compatible with static exports.
// Moved data to a client-side data file instead.
// See: app/data/dashboard.ts

import { NextResponse } from 'next/server';

export const dynamic = 'error';

export async function GET() {
  return NextResponse.json(
    { error: 'This API route is not available in static export' },
    { status: 400 }
  );
}