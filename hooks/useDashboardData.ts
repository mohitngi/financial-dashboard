'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { 
  fetchData, 
  AUMData, 
  SIPData, 
  StatsData, 
  ClientData, 
  SIPBusinessData, 
  MonthlyMISData 
} from '@/lib/api';

export function useDashboardData(timeRange = '3 Days') {
  // AUM Data
  const { data: aumData, isLoading: isLoadingAUM } = useQuery<AUMData>({
    queryKey: ['aum', timeRange],
    queryFn: () => fetchData(`aum?range=${encodeURIComponent(timeRange)}`),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // SIP Data
  const { data: sipData, isLoading: isLoadingSIP } = useQuery<SIPData>({
    queryKey: ['sip', timeRange],
    queryFn: () => fetchData(`sip?range=${encodeURIComponent(timeRange)}`),
    staleTime: 5 * 60 * 1000,
  });

  // Stats
  const { data: stats, isLoading: isLoadingStats } = useQuery<StatsData>({
    queryKey: ['stats', timeRange],
    queryFn: () => fetchData(`stats?range=${encodeURIComponent(timeRange)}`),
    staleTime: 5 * 60 * 1000,
  });

  // Clients
  const { data: clients, isLoading: isLoadingClients } = useQuery<ClientData>({
    queryKey: ['clients', timeRange],
    queryFn: () => fetchData(`clients?range=${encodeURIComponent(timeRange)}`),
    staleTime: 5 * 60 * 1000,
  });

  // SIP Business
  const { data: sipBusiness, isLoading: isLoadingSipBusiness } = useQuery<SIPBusinessData>({
    queryKey: ['sip-business', timeRange],
    queryFn: () => fetchData(`sip-business?range=${encodeURIComponent(timeRange)}`),
    staleTime: 5 * 60 * 1000,
  });

  // Monthly MIS
  const { data: monthlyMIS, isLoading: isLoadingMonthlyMIS } = useQuery<MonthlyMISData>({
    queryKey: ['monthly-mis', timeRange],
    queryFn: () => fetchData(`monthly-mis?range=${encodeURIComponent(timeRange)}`),
    staleTime: 5 * 60 * 1000,
  });

  const isLoading = 
    isLoadingAUM || 
    isLoadingSIP || 
    isLoadingStats || 
    isLoadingClients || 
    isLoadingSipBusiness || 
    isLoadingMonthlyMIS;

  return {
    aum: aumData,
    sip: sipData?.current || 0,
    sipChange: sipData?.change || 0,
    sipTrend: sipData?.trend || 'up',
    stats: stats || {
      purchases: 0,
      purchasesAmount: '0.00 INR',
      redemptions: 0,
      redemptionsAmount: '0.00 INR',
      rejTransactions: 0,
      rejTransactionsAmount: '0.00 INR',
      sipRejections: 0,
      sipRejectionsAmount: '0.00 INR',
      newSIP: 0,
      newSIPAmount: '0.00 INR'
    },
    clients: clients || {
      active: 0,
      inactive: 0,
      new: 0,
      online: 0
    },
    sipBusiness,
    monthlyMIS,
    isLoading,
  };
}
