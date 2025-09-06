// Mock data for the dashboard
export const dashboardData = {
  aum: {
    current: 12.19,
    change: 0.77,
    trend: 'up' as const,
  },
  sip: {
    current: 1.39,
    change: 0.9,
    trend: 'up' as const,
  },
  stats: [
    { title: 'Purchases', value: 0, amount: '0.00 INR' },
    { title: 'Redemptions', value: 0, amount: '0.00 INR' },
    { title: 'Rej Transactions', value: 0, amount: '0.00 INR' },
    { title: 'SIP Rejections', value: 0, amount: '0.00 INR' },
    { title: 'New SIP', value: 0, amount: '0.00 INR' },
  ],
  clients: [
    { name: 'Active', value: 3824, color: '#ef4444' },
    { name: 'InActive', value: 541, color: '#f97316' },
    { name: 'New', value: 2, color: '#22c55e' },
    { name: 'Online', value: 60, color: '#eab308' },
  ],
  sipBusiness: [
    { month: 'Mar', bar: 1.6, line: 2.4 },
    { month: 'Apr', bar: 0.2, line: 1.8 },
    { month: 'May', bar: 1.4, line: 0.8 },
    { month: 'Jun', bar: 1.6, line: 1.2 },
  ],
  monthlyMis: [
    { month: 'Jan', line1: 0.2, line2: 0.15, line3: 0.25 },
    { month: 'Feb', line1: 0.3, line2: 0.2, line3: 0.35 },
    { month: 'Mar', line1: 0.25, line2: 0.3, line3: 0.2 },
    { month: 'Apr', line1: 0.4, line2: 0.25, line3: 0.45 },
    { month: 'May', line1: 0.35, line2: 0.4, line3: 0.3 },
    { month: 'Jun', line1: 0.2, line2: 0.35, line3: 0.25 },
  ],
};

export function getDashboardData(timeRange: string = '3 Days') {
  const multiplier = timeRange === '30 Days' ? 1.5 : timeRange === '10 Days' ? 1.2 : 1;

  return {
    ...dashboardData,
    aum: {
      ...dashboardData.aum,
      current: Number((dashboardData.aum.current * multiplier).toFixed(2)),
    },
    sip: {
      ...dashboardData.sip,
      current: Number((dashboardData.sip.current * multiplier).toFixed(2)),
    },
  };
}
