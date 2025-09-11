import { NextResponse } from 'next/server';

// Mock data for different time ranges
const mockData = {
  '3 Days': [
    { month: 'Mar', bar: 1.6, line: 2.4 },
    { month: 'Apr', bar: 0.2, line: 1.8 },
    { month: 'May', bar: 1.4, line: 0.8 },
    { month: 'Jun', bar: 1.6, line: 1.2 },
  ],
  '7 Days': [
    { month: 'Feb', bar: 1.2, line: 2.0 },
    { month: 'Mar', bar: 1.6, line: 2.4 },
    { month: 'Apr', bar: 0.2, line: 1.8 },
    { month: 'May', bar: 1.4, line: 0.8 },
    { month: 'Jun', bar: 1.6, line: 1.2 },
  ],
  '10 Days': [
    { month: 'Jan', bar: 1.0, line: 1.8 },
    { month: 'Feb', bar: 1.2, line: 2.0 },
    { month: 'Mar', bar: 1.6, line: 2.4 },
    { month: 'Apr', bar: 0.2, line: 1.8 },
    { month: 'May', bar: 1.4, line: 0.8 },
    { month: 'Jun', bar: 1.6, line: 1.2 },
  ],
  '30 Days': [
    { month: 'Oct', bar: 0.8, line: 1.5 },
    { month: 'Nov', bar: 1.1, line: 1.7 },
    { month: 'Dec', bar: 0.9, line: 1.9 },
    { month: 'Jan', bar: 1.0, line: 1.8 },
    { month: 'Feb', bar: 1.2, line: 2.0 },
    { month: 'Mar', bar: 1.6, line: 2.4 },
    { month: 'Apr', bar: 0.2, line: 1.8 },
    { month: 'May', bar: 1.4, line: 0.8 },
    { month: 'Jun', bar: 1.6, line: 1.2 },
  ],
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = searchParams.get('range') || '3 Days';
  
  // Get data for the selected range, default to '3 Days' if not found
  const data = mockData[range as keyof typeof mockData] || mockData['3 Days'];
  
  await new Promise(resolve => setTimeout(resolve, 350));
  return NextResponse.json(data);
}
