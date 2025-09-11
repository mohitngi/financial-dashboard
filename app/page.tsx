'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PdfButton } from '@/components/PdfGenerator';
import { 
  TrendingUp, 
  Download,
  Search,
  Filter,
  MapPin,
  Settings,
  Bell,
  Star,
  Users,
  Zap,
  User,
  Lock,
  Chrome,
  LogOut,
  GraduationCap,
  HelpCircle,
  Moon,
  Sun,
  Loader2
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ComposedChart,
  Area,
  AreaChart,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { useDashboardData } from '@/hooks/useDashboardData';

// Navigation items
const navItems = [
  { name: 'CRM', icon: Users },
  { name: 'Utilities', icon: Zap },
  { name: 'Insurance', icon: Lock },
  { name: 'Assets', icon: GraduationCap },
  { name: 'Mutual', icon: TrendingUp },
  { name: 'Research', icon: Search },
  { name: 'Transact Online', icon: Chrome },
  { name: 'Goal GPS', icon: MapPin },
  { name: 'Financial Planning', icon: HelpCircle },
  { name: 'Wealth Report', icon: Download },
  { name: 'Other', icon: Settings }
];

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('3 Days');
  
  // Fetch data using our custom hook with the selected time range
  const {
    aum,
    sip,
    sipChange,
    sipTrend,
    stats,
    clients,
    sipBusiness,
    monthlyMIS,
    isLoading
  } = useDashboardData(timeRange);
  
  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeRanges = ['3 Days', '7 Days', '10 Days', '30 Days'];

  return (
    <div className="min-h-screen bg-background" id="dashboard-content">
      {/* Top Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="px-4 sm:px-6 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Logo and Search */}
            <div className="flex items-center justify-between w-full sm:w-auto">
              <div className="flex items-center">
                <div className="w-10 h-8 bg-gradient-to-r from-blue-500 via-green-400 to-green-500 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <div className="ml-2">
                  <div className="text-blue-600 font-bold text-lg leading-tight">Wealth Elite</div>
                  <div className="text-green-500 text-[6px] font-medium uppercase tracking-wider text-center">FINANCIAL SERVICES</div> 
                </div>
              </div>
              
              {/* Mobile menu button with theme toggle - hidden in PDF */}
              <div className="flex items-center sm:hidden">
                <div className="mr-2">
                  <ThemeToggle />
                  <span className="sr-only">Toggle theme</span>
                </div>
                <button 
                  data-pdf-ignore
                  className="p-2 -mr-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-expanded={isMobileMenuOpen}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            
            {/* Search bar and PDF Export */}
            <div className="flex-1 flex items-center space-x-3 sm:pl-4 md:pl-8 lg:pl-16">
              <div className="relative w-full max-w-3xl">
                <input
                  type="text"
                  className="block w-full pl-4 pr-10 py-1.5 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <PdfButton 
                elementId="dashboard-content" 
                filename="financial-dashboard"
                className="flex-shrink-0 px-3 py-1.5 text-sm"
              />
            </div>
            
            {/* Mobile Menu - Shows all icons when open */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:flex sm:items-center sm:justify-end sm:space-x-3 lg:space-x-5`}>
              <div className="sm:hidden bg-gray-50 border-t border-b border-gray-200 -mx-4 px-4 py-2 mb-2">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Quick Actions</div>
                <div className="grid grid-cols-4 gap-2">
                  <button className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100 text-gray-700">
                    <Filter className="h-5 w-5 mb-1" />
                    <span className="text-xs">Filter</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100 text-gray-700">
                    <MapPin className="h-5 w-5 mb-1" />
                    <span className="text-xs">Locations</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100 text-gray-700">
                    <Settings className="h-5 w-5 mb-1" />
                    <span className="text-xs">Settings</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100 text-gray-700">
                    <Bell className="h-5 w-5 mb-1" />
                    <span className="text-xs">Alerts</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100 text-gray-700">
                    <Star className="h-5 w-5 mb-1" />
                    <span className="text-xs">Favorites</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100 text-gray-700">
                    <Users className="h-5 w-5 mb-1" />
                    <span className="text-xs">Team</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100 text-gray-700">
                    <Zap className="h-5 w-5 mb-1" />
                    <span className="text-xs">Activity</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100 text-gray-700">
                    <User className="h-5 w-5 mb-1" />
                    <span className="text-xs">Profile</span>
                  </button>
                </div>
              </div>

              {/* Desktop Icons - Hidden on mobile */}
              <div className="hidden sm:flex items-center space-x-1 lg:space-x-3">
                <button className="text-gray-500 hover:text-gray-700 transition-colors p-1" title="Filter">
                  <Filter className="h-5 w-5" />
                </button>
                <button className="text-gray-500 hover:text-gray-700 transition-colors p-1" title="Locations">
                  <MapPin className="h-5 w-5" />
                </button>
                <button className="text-gray-500 hover:text-gray-700 transition-colors p-1" title="Settings">
                  <Settings className="h-5 w-5" />
                </button>
                <button className="text-gray-500 hover:text-gray-700 transition-colors p-1" title="Notifications">
                  <Bell className="h-5 w-5" />
                </button>
                <button className="text-gray-500 hover:text-gray-700 transition-colors p-1 lg:block hidden" title="Favorites">
                  <Star className="h-5 w-5" />
                </button>
                <button className="text-gray-500 hover:text-gray-700 transition-colors p-1 xl:block hidden" title="Team">
                  <Users className="h-5 w-5" />
                </button>
                <button className="text-gray-500 hover:text-gray-700 transition-colors p-1 xl:block hidden" title="Activity">
                  <Zap className="h-5 w-5" />
                </button>
                <button className="text-gray-500 hover:text-gray-700 transition-colors p-1 xl:block hidden" title="Profile">
                  <User className="h-5 w-5" />
                </button>
              </div>
              
              <div className="h-6 w-px bg-gray-300 mx-1"></div>
              
              <div className="flex items-center justify-between sm:justify-end space-x-2 mt-2 sm:mt-0 px-2 sm:px-0">
                <div className="hidden sm:flex items-center space-x-1">
                  <ThemeToggle />
                </div>
                <div className="flex items-center space-x-1">
                  <button className="text-gray-500 hover:text-gray-700 p-1">
                    <LogOut className="h-5 w-5" />
                  </button>
                  <button className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    LOGOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar with equal gaps */}
      <nav data-pdf-ignore className="bg-red-600 text-white">
        <div className="w-full overflow-x-auto">
          <div className="flex h-10 text-xs md:text-sm font-medium">
            <div className="flex w-full justify-between px-4">
              <a href="#" className="flex items-center justify-center py-2 px-2 text-white border-b-2 border-white">
                CRM
              </a>
              <a href="#" className="flex items-center justify-center py-2 px-2 text-red-100 hover:text-white hover:bg-red-700">
                Utilities
              </a>
              <a href="#" className="flex items-center justify-center py-2 px-2 text-red-100 hover:text-white hover:bg-red-700">
                Insurance
              </a>
              <a href="#" className="flex items-center justify-center py-2 px-2 text-red-100 hover:text-white hover:bg-red-700">
                Assets
              </a>
              <a href="#" className="flex items-center justify-center py-2 px-2 text-red-100 hover:text-white hover:bg-red-700">
                Mutual
              </a>
              <a href="#" className="flex items-center justify-center py-2 px-2 text-red-100 hover:text-white hover:bg-red-700">
                Research
              </a>
              <a href="#" className="flex items-center justify-center py-2 px-2 text-red-100 hover:text-white hover:bg-red-700">
                Transact Online
              </a>
              <a href="#" className="flex items-center justify-center py-2 px-2 text-red-100 hover:text-white hover:bg-red-700">
                Goal GPS
              </a>
              <a href="#" className="flex items-center justify-center py-2 px-2 text-red-100 hover:text-white hover:bg-red-700">
                Financial Planning
              </a>
              <a href="#" className="flex items-center justify-center py-2 px-2 text-red-100 hover:text-white hover:bg-red-700">
                Wealth Report
              </a>
              <a href="#" className="flex items-center justify-center py-2 px-2 text-red-100 hover:text-white hover:bg-red-700">
                Other
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="px-6 py-4" data-pdf-container>
        {/* Add a title that only shows in PDF */}
        <h1 className="text-2xl font-bold mb-6 hidden" data-pdf-only>Financial Dashboard Report</h1>
        {/* Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* AUM Card */}
          <Card className="bg-card shadow-sm border rounded-md relative">
            <CardContent className="p-4">
              <div className="relative w-full h-6 mb-1">
                <span className="absolute left-0 top-0 text-[13px] font-medium text-muted-foreground">Current</span>
                <div className="absolute right-0 top-0">
                  <Button variant="outline" size="sm" className="bg-red-50 text-red-600 border-red-100 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/50 dark:hover:bg-red-900/30 text-[11px] px-2 h-6">
                    View Report
                  </Button>
                </div>
              </div>
              <div className="text-center mb-1">
                <h2 className="text-2xl font-bold text-foreground leading-none">
                  {aum?.current ? aum.current.toFixed(2) : '0.00'} <span className="text-base font-normal text-muted-foreground">Cr</span>
                </h2>
                <div className="flex items-center justify-center mt-1">
                  <TrendingUp className={`w-3 h-3 ${aum?.trend === 'up' ? 'text-green-500' : 'text-red-500 transform rotate-180'} mr-1`} />
                  <span className={`${aum?.trend === 'up' ? 'text-green-600' : 'text-red-600'} font-medium text-[11px]`}>
                    {aum?.change || 0}% MoM
                  </span>
                </div>
              </div>
              <div className="flex justify-end -mb-1.5">
                <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/20 text-[11px] px-2 h-5 -mr-1">
                  View Trend <span className="ml-0.5">▼</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* SIP Booked Card */}
          <Card className="bg-card shadow-sm border rounded-md relative">
            <CardContent className="p-4">
              <div className="relative w-full h-6 mb-1">
                <span className="absolute left-0 top-0 text-[13px] font-medium text-muted-foreground">Current</span>
                <div className="absolute right-0 top-0">
                  <Button variant="outline" size="sm" className="bg-red-50 text-red-600 border-red-100 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/50 dark:hover:bg-red-900/30 text-[11px] px-2 h-6">
                    View Report
                  </Button>
                </div>
              </div>
              <div className="text-center mb-1">
                <h2 className="text-2xl font-bold text-foreground leading-none">
                  {sip?.toFixed(2)} <span className="text-base font-normal text-muted-foreground">Lakh</span>
                </h2>
                <div className="flex items-center justify-center mt-1">
                  <TrendingUp className={`w-3 h-3 ${sipTrend === 'up' ? 'text-green-500' : 'text-red-500 transform rotate-180'} mr-1`} />
                  <span className={`${sipTrend === 'up' ? 'text-green-600' : 'text-red-600'} font-medium text-[11px]`}>
                    {sipChange}% MoM
                  </span>
                </div>
              </div>
              <div className="flex justify-end -mb-1.5">
                <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/20 text-[11px] px-2 h-5 -mr-1">
                  View Trend <span className="ml-0.5">▼</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Time Range Filter */}
        <div className="flex gap-2 mb-4">
          {timeRanges.map((range) => (
            <div 
              key={range}
              onClick={() => !isLoading && handleTimeRangeChange(range)}
              className={`px-3 py-1 text-sm rounded-full cursor-pointer transition-colors ${
                timeRange === range 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              aria-disabled={isLoading}
            >
              {range}
            </div>          ))}
        </div>

        {/* Stats Cards Container */}
        <div className="border rounded-lg p-4 mb-6 bg-card">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
            {/* Purchases */}
            <Card className="bg-card shadow-sm border rounded-md">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50 text-xs px-2 h-6">
                    View Report
                  </Button>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stats.purchases}</h3>
                <p className="text-sm text-gray-600 mb-1">Purchases</p>
                <p className="text-xs text-gray-500">{stats.purchasesAmount}</p>
              </CardContent>
            </Card>

            {/* Redemptions */}
            <Card className="bg-card shadow-sm border rounded-md">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50 text-xs px-2 h-6">
                    View Report
                  </Button>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{stats.redemptions}</h3>
                <p className="text-sm text-muted-foreground mb-1">Redemptions</p>
                <p className="text-xs text-muted-foreground/80">{stats.redemptionsAmount}</p>
              </CardContent>
            </Card>

            {/* Rej Transactions */}
            <Card className="bg-card shadow-sm border rounded-md">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50 text-xs px-2 h-6">
                    View Report
                  </Button>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{stats.rejTransactions}</h3>
                <p className="text-sm text-muted-foreground mb-1">Rej Transactions</p>
                <p className="text-xs text-muted-foreground/80">{stats.rejTransactionsAmount}</p>
              </CardContent>
            </Card>

            {/* SIP Rejections */}
            <Card className="bg-card shadow-sm border rounded-md">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50 text-xs px-2 h-6">
                    View Report
                  </Button>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{stats.sipRejections}</h3>
                <p className="text-sm text-muted-foreground mb-1">SIP Rejections</p>
                <p className="text-xs text-muted-foreground/80">{stats.sipRejectionsAmount}</p>
              </CardContent>
            </Card>

            {/* New SIP */}
            <Card className="bg-card shadow-sm border rounded-md">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50 text-xs px-2 h-6">
                    View Report
                  </Button>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{stats.newSIP}</h3>
                <p className="text-sm text-muted-foreground mb-1">New SIP</p>
                <p className="text-xs text-muted-foreground/80">{stats.newSIPAmount}</p>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Clients Bubble Chart */}
          <Card className="bg-card shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-sm font-semibold">CLIENTS</CardTitle>
              <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-50 dark:text-red-400 dark:border-red-800 dark:hover:bg-red-900/20 text-xs px-2 py-1 h-6">
                <Download className="w-3 h-3 mr-1" />
                Download Report
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-64 relative">
                {/* Custom bubble chart to match the image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Large red circle - Active */}
                    <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl relative">
                      {clients?.active || 0}
                      {/* Orange circle - Online */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {clients?.online || 0}
                      </div>
                      {/* Medium red circle - InActive */}
                      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                        {clients?.inactive || 0}
                      </div>
                      {/* Small green circle - New */}
                      <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {clients?.new || 0}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-4 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                  <span className="text-gray-600">Online</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                  <span className="text-gray-600">New</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Active</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                  <span className="text-gray-600">InActive</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SIP Business Chart */}
          <Card className="bg-card shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-sm font-semibold">SIP BUSINESS CHART</CardTitle>
              <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-50 dark:text-red-400 dark:border-red-800 dark:hover:bg-red-900/20 text-xs px-2 py-1 h-6">
                View Report
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-64">
                {isLoading ? (
                  <div className="h-full flex items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={sipBusiness}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                      <Tooltip />
                      <Bar yAxisId="left" dataKey="bar" fill="#8884d8" name="SIP Business" />
                      <Line yAxisId="right" type="monotone" dataKey="line" stroke="#82ca9d" name="SIP Trend" dot={false} />
                    </ComposedChart>
                  </ResponsiveContainer>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Monthly MIS Chart */}
          <Card className="bg-card shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-sm font-semibold">MONTHLY MIS</CardTitle>
              <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-50 dark:text-red-400 dark:border-red-800 dark:hover:bg-red-900/20 text-xs px-2 py-1 h-6">
                View Report
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-64">
                {isLoading ? (
                  <div className="h-full flex items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={monthlyMIS}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="line1" stroke="#8884d8" name="Equity" dot={false} />
                      <Line type="monotone" dataKey="line2" stroke="#82ca9d" name="Debt" dot={false} />
                      <Line type="monotone" dataKey="line3" stroke="#ffc658" name="Hybrid" dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}