import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';


// Mock data for different time ranges
const mockData = {
  '3 Days': {
    current: 12.19,
    change: 0.77,
    trend: 'up' as const,
  },
  '7 Days': {
    current: 11.89,
    change: 0.45,
    trend: 'up' as const,
  },
  '10 Days': {
    current: 11.52,
    change: 0.12,
    trend: 'up' as const,
  },
  '30 Days': {
    current: 10.98,
    change: -0.23,
    trend: 'down' as const,
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = searchParams.get('range') || '3 Days';
  
  // Get data for the selected range, default to '3 Days' if not found
  const data = {
    ...mockData[range as keyof typeof mockData] || mockData['3 Days'],
    timestamp: new Date().toISOString()
  };
  
  // Add artificial delay to simulate network request
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return NextResponse.json(data);
}
