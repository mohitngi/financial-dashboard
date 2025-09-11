import { NextResponse } from 'next/server';

// Mock data for different time ranges
const mockData = {
  '3 Days': {
    current: 1.39,
    change: 0.9,
    trend: 'up' as const,
  },
  '7 Days': {
    current: 1.28,
    change: 0.7,
    trend: 'up' as const,
  },
  '10 Days': {
    current: 1.15,
    change: 0.4,
    trend: 'up' as const,
  },
  '30 Days': {
    current: 0.98,
    change: -0.1,
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
  
  await new Promise(resolve => setTimeout(resolve, 300));
  return NextResponse.json(data);
}
