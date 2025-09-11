import { NextResponse } from 'next/server';

// Mock data for different time ranges
const mockData = {
  '3 Days': [
    { month: 'Jan', line1: 0.2, line2: 0.15, line3: 0.25 },
    { month: 'Feb', line1: 0.3, line2: 0.2, line3: 0.35 },
    { month: 'Mar', line1: 0.25, line2: 0.3, line3: 0.2 },
  ],
  '7 Days': [
    { month: 'Jan', line1: 0.2, line2: 0.15, line3: 0.25 },
    { month: 'Feb', line1: 0.3, line2: 0.2, line3: 0.35 },
    { month: 'Mar', line1: 0.25, line2: 0.3, line3: 0.2 },
    { month: 'Apr', line1: 0.4, line2: 0.25, line3: 0.45 },
    { month: 'May', line1: 0.35, line2: 0.4, line3: 0.3 },
  ],
  '10 Days': [
    { month: 'Jan', line1: 0.2, line2: 0.15, line3: 0.25 },
    { month: 'Feb', line1: 0.3, line2: 0.2, line3: 0.35 },
    { month: 'Mar', line1: 0.25, line2: 0.3, line3: 0.2 },
    { month: 'Apr', line1: 0.4, line2: 0.25, line3: 0.45 },
    { month: 'May', line1: 0.35, line2: 0.4, line3: 0.3 },
    { month: 'Jun', line1: 0.2, line2: 0.35, line3: 0.25 },
  ],
  '30 Days': [
    { month: 'Jan', line1: 0.2, line2: 0.15, line3: 0.25 },
    { month: 'Feb', line1: 0.3, line2: 0.2, line3: 0.35 },
    { month: 'Mar', line1: 0.25, line2: 0.3, line3: 0.2 },
    { month: 'Apr', line1: 0.4, line2: 0.25, line3: 0.45 },
    { month: 'May', line1: 0.35, line2: 0.4, line3: 0.3 },
    { month: 'Jun', line1: 0.2, line2: 0.35, line3: 0.25 },
    { month: 'Jul', line1: 0.3, line2: 0.25, line3: 0.35 },
    { month: 'Aug', line1: 0.4, line2: 0.3, line3: 0.45 },
    { month: 'Sep', line1: 0.35, line2: 0.4, line3: 0.3 },
  ],
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = searchParams.get('range') || '3 Days';
  
  // Get data for the selected range, default to '3 Days' if not found
  const data = mockData[range as keyof typeof mockData] || mockData['3 Days'];
  
  await new Promise(resolve => setTimeout(resolve, 400));
  return NextResponse.json(data);
}
