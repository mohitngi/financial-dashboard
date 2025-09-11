import { NextResponse } from 'next/server';

// Mock data for different time ranges
const mockData = {
  '3 Days': {
    active: 3824,
    inactive: 541,
    new: 2,
    online: 60
  },
  '7 Days': {
    active: 3805,
    inactive: 538,
    new: 5,
    online: 58
  },
  '10 Days': {
    active: 3789,
    inactive: 535,
    new: 8,
    online: 55
  },
  '30 Days': {
    active: 3720,
    inactive: 520,
    new: 15,
    online: 45
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = searchParams.get('range') || '3 Days';
  
  // Get data for the selected range, default to '3 Days' if not found
  const rangeData = mockData[range as keyof typeof mockData] || mockData['3 Days'];
  
  const data = {
    active: rangeData.active,
    inactive: rangeData.inactive,
    new: rangeData.new,
    online: rangeData.online,
    timestamp: new Date().toISOString()
  };
  
  await new Promise(resolve => setTimeout(resolve, 250));
  return NextResponse.json(data);
}
