import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = searchParams.get('range') || '3 Days';
  
  // This is a mock implementation - replace with actual data fetching logic
  const data = {
    range,
    updatedAt: new Date().toISOString(),
    // Add other data that changes based on time range
  };

  return NextResponse.json(data);
}
