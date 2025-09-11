import { NextResponse } from 'next/server';

// Mock data for different time ranges
const mockData = {
  '3 Days': {
    purchases: 42,
    purchasesAmount: '1,250,000 INR',
    redemptions: 28,
    redemptionsAmount: '850,000 INR',
    rejTransactions: 5,
    rejTransactionsAmount: '150,000 INR',
    sipRejections: 3,
    sipRejectionsAmount: '75,000 INR',
    newSIP: 12,
    newSIPAmount: '300,000 INR',
  },
  '7 Days': {
    purchases: 95,
    purchasesAmount: '2,850,000 INR',
    redemptions: 63,
    redemptionsAmount: '1,890,000 INR',
    rejTransactions: 12,
    rejTransactionsAmount: '360,000 INR',
    sipRejections: 7,
    sipRejectionsAmount: '175,000 INR',
    newSIP: 25,
    newSIPAmount: '625,000 INR',
  },
  '10 Days': {
    purchases: 135,
    purchasesAmount: '4,050,000 INR',
    redemptions: 90,
    redemptionsAmount: '2,700,000 INR',
    rejTransactions: 18,
    rejTransactionsAmount: '540,000 INR',
    sipRejections: 10,
    sipRejectionsAmount: '250,000 INR',
    newSIP: 38,
    newSIPAmount: '950,000 INR',
  },
  '30 Days': {
    purchases: 420,
    purchasesAmount: '12,600,000 INR',
    redemptions: 280,
    redemptionsAmount: '8,400,000 INR',
    rejTransactions: 42,
    rejTransactionsAmount: '1,260,000 INR',
    sipRejections: 25,
    sipRejectionsAmount: '625,000 INR',
    newSIP: 120,
    newSIPAmount: '3,000,000 INR',
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = searchParams.get('range') || '3 Days';
  
  // Get data for the selected range, default to '3 Days' if not found
  const data = mockData[range as keyof typeof mockData] || mockData['3 Days'];
  
  await new Promise(resolve => setTimeout(resolve, 200));
  return NextResponse.json(data);
}
