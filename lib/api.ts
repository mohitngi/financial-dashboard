export async function fetchData<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
  const url = `${baseUrl}/api/dashboard/${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

// Type definitions for our API responses
export type AUMData = {
  current: number;
  change: number;
  trend: 'up' | 'down';
  timestamp: string;
};

export type SIPData = {
  current: number;
  change: number;
  trend: 'up' | 'down';
  timestamp: string;
};

export type StatsData = {
  purchases: number;
  purchasesAmount: string;
  redemptions: number;
  redemptionsAmount: string;
  rejTransactions: number;
  rejTransactionsAmount: string;
  sipRejections: number;
  sipRejectionsAmount: string;
  newSIP: number;
  newSIPAmount: string;
};

export type ClientData = {
  active: number;
  inactive: number;
  new: number;
  online: number;
};

export type SIPBusinessData = {
  month: string;
  bar: number;
  line: number;
}[];

export type MonthlyMISData = {
  month: string;
  line1: number;
  line2: number;
  line3: number;
}[];
