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
  Sun
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
  AreaChart
} from 'recharts';

// Mock data for different time ranges
const timeRangeData = {
  '3 Days': {
    sipBusiness: [
      { month: 'Mon', bar: 1.2, line: 1.8 },
      { month: 'Tue', bar: 1.6, line: 2.0 },
      { month: 'Wed', bar: 1.4, line: 1.6 }
    ],
    monthlyMis: [
      { month: 'Mon', line1: 0.25, line2: 0.30, line3: 0.20 },
      { month: 'Tue', line1: 0.40, line2: 0.25, line3: 0.35 },
      { month: 'Wed', line1: 0.35, line2: 0.40, line3: 0.30 }
    ]
  },
  '7 Days': {
    sipBusiness: [
      { month: 'Mon', bar: 1.2, line: 1.8 },
      { month: 'Tue', bar: 1.6, line: 2.0 },
      { month: 'Wed', bar: 1.4, line: 1.6 },
      { month: 'Thu', bar: 1.8, line: 2.2 },
      { month: 'Fri', bar: 1.5, line: 1.9 },
      { month: 'Sat', bar: 1.2, line: 1.7 },
      { month: 'Sun', bar: 1.0, line: 1.5 }
    ],
    monthlyMis: [
      { month: 'Mon', line1: 0.25, line2: 0.30, line3: 0.20 },
      { month: 'Tue', line1: 0.40, line2: 0.25, line3: 0.35 },
      { month: 'Wed', line1: 0.35, line2: 0.40, line3: 0.30 },
      { month: 'Thu', line1: 0.45, line2: 0.35, line3: 0.40 },
      { month: 'Fri', line1: 0.30, line2: 0.45, line3: 0.25 },
      { month: 'Sat', line1: 0.25, line2: 0.30, line3: 0.20 },
      { month: 'Sun', line1: 0.20, line2: 0.25, line3: 0.15 }
    ]
  },
  '10 Days': {
    sipBusiness: Array(10).fill(0).map((_, i) => ({
      month: `Day ${i + 1}`,
      bar: 1 + Math.random() * 1.5,
      line: 1.5 + Math.random() * 1.5
    })),
    monthlyMis: Array(10).fill(0).map((_, i) => ({
      month: `Day ${i + 1}`,
      line1: 0.2 + Math.random() * 0.3,
      line2: 0.15 + Math.random() * 0.3,
      line3: 0.1 + Math.random() * 0.4
    }))
  },
  '30 Days': {
    sipBusiness: [
      { month: 'Week 1', bar: 4.5, line: 5.8 },
      { month: 'Week 2', bar: 5.2, line: 6.0 },
      { month: 'Week 3', bar: 4.8, line: 5.5 },
      { month: 'Week 4', bar: 5.5, line: 6.2 }
    ],
    monthlyMis: [
      { month: 'Week 1', line1: 1.2, line2: 1.0, line3: 1.4 },
      { month: 'Week 2', line1: 1.5, line2: 1.2, line3: 1.7 },
      { month: 'Week 3', line1: 1.3, line2: 1.5, line3: 1.2 },
      { month: 'Week 4', line1: 1.6, line2: 1.3, line3: 1.8 }
    ]
  }
};

export default function Dashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('3 Days');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeRanges = ['3 Days', '7 Days', '10 Days', '30 Days'];
  
  // Get data based on selected time range
  const chartData = timeRangeData[selectedTimeRange as keyof typeof timeRangeData];
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
              
              {/* Mobile menu button - hidden in PDF */}
              <button 
                data-pdf-ignore
                className="sm:hidden p-2 -mr-2 text-gray-500 hover:text-gray-700"
                onClick={toggleMobileMenu}
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
                <div className="flex items-center space-x-1">
                  <ThemeToggle />
                  <span className="text-sm text-gray-700 dark:text-gray-300 sm:hidden">Toggle Theme</span>
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

      {/* Responsive Navigation Bar - hidden in PDF */}
      <nav data-pdf-ignore className="bg-red-600 text-white">
        <div className="px-2 sm:px-4 lg:px-6 overflow-x-auto">
          <div className="flex items-center min-w-max h-12 text-sm font-medium whitespace-nowrap">
            <div className="flex space-x-4 sm:space-x-6 md:space-x-8 px-2">
              <span className="bg-red-700 px-3 py-1 rounded flex-shrink-0">HOME</span>
              <span className="flex-shrink-0">CRM</span>
              <span className="flex-shrink-0">UTILITIES</span>
              <span className="flex items-center flex-shrink-0">
                INSURANCE
                <span className="ml-1">▼</span>
              </span>
              <span className="flex items-center flex-shrink-0">
                ASSETS
                <span className="ml-1">▼</span>
              </span>
              <span className="flex-shrink-0">MUTUAL</span>
              <span className="flex-shrink-0">RESEARCH</span>
              <span className="flex-shrink-0">TRANSACT ONLINE</span>
              <span className="flex-shrink-0">GOAL GPS</span>
              <span className="flex-shrink-0">FINANCIAL PLANNING</span>
              <span className="flex-shrink-0">WEALTH REPORT</span>
              <span className="flex items-center flex-shrink-0">
                OTHER
                <span className="ml-1">▼</span>
              </span>
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
          <Card className="bg-card shadow-sm border rounded-md">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[13px] font-medium text-muted-foreground pl-80">Current</span>
                <Button variant="outline" size="sm" className="bg-red-50 text-red-600 border-red-100 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/50 dark:hover:bg-red-900/30 text-[11px] px-2 h-5 -mr-1 mt-4">
                  View Report
                </Button>
              </div>
              <div className="text-center mb-1">
                <h2 className="text-2xl font-bold text-foreground leading-none">AUM 12.19 <span className="text-base font-normal text-muted-foreground">Cr</span></h2>
                <div className="flex items-center justify-center mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-green-600 font-medium text-[11px]">+0.77% MoM</span>
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
          <Card className="bg-card shadow-sm border rounded-md">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[13px] font-medium text-muted-foreground pl-80">Current</span>
                <Button variant="outline" size="sm" className="bg-red-50 text-red-600 border-red-100 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/50 dark:hover:bg-red-900/30 text-[11px] px-2 h-5 -mr-1 mt-4">
                  View Report
                </Button>
              </div>
              <div className="text-center mb-1">
                <h2 className="text-2xl font-bold text-foreground leading-none">SIP 2.19 <span className="text-base font-normal text-muted-foreground">Lakh</span></h2>
                <div className="flex items-center justify-center mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-green-600 font-medium text-[11px]">+0% MoM</span>
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
              onClick={() => setSelectedTimeRange(range)}
              className={`text-xs h-7 px-3 rounded-md flex items-center justify-center cursor-pointer transition-colors ${
                selectedTimeRange === range 
                  ? 'bg-red-500 text-white border border-red-500' 
                  : 'bg-white border border-gray-300 text-gray-600'
              }`}
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
                <h3 className="text-2xl font-bold text-gray-900 mb-1">0</h3>
                <p className="text-sm text-gray-600 mb-1">Purchases</p>
                <p className="text-xs text-gray-500">0.00 INR</p>
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
                <h3 className="text-2xl font-bold text-foreground mb-1">0</h3>
                <p className="text-sm text-muted-foreground mb-1">Redemptions</p>
                <p className="text-xs text-muted-foreground/80">0.00 INR</p>
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
              <h3 className="text-2xl font-bold text-foreground mb-1">0</h3>
              <p className="text-sm text-muted-foreground mb-1">Rej Transactions</p>
              <p className="text-xs text-muted-foreground/80">0.00 INR</p>
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
              <h3 className="text-2xl font-bold text-foreground mb-1">0</h3>
              <p className="text-sm text-muted-foreground mb-1">SIP Rejections</p>
              <p className="text-xs text-muted-foreground/80">0.00 INR</p>
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
              <h3 className="text-2xl font-bold text-foreground mb-1">0</h3>
              <p className="text-sm text-muted-foreground mb-1">New SIP</p>
              <p className="text-xs text-muted-foreground/80">0.00 INR</p>
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
                      3824
                      {/* Orange circle - Online */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        60
                      </div>
                      {/* Medium red circle - InActive */}
                      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                        541
                      </div>
                      {/* Small green circle - New */}
                      <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        2
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
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={chartData.sipBusiness} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                      className="text-xs"
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                      domain={[0, 2.5]}
                      className="text-xs"
                    />
                    <Bar dataKey="bar" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} />
                    <Line 
                      type="monotone" 
                      dataKey="line" 
                      stroke="hsl(var(--destructive))" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(var(--destructive))', strokeWidth: 2, r: 4 }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
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
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData.monthlyMis} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                      className="text-xs"
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                      domain={[-0.3, 0.5]}
                      className="text-xs"
                    />
                    <Area
                      type="monotone"
                      dataKey="line1"
                      stackId="1"
                      stroke="hsl(var(--destructive))"
                      fill="hsl(var(--destructive))"
                      fillOpacity={0.3}
                    />
                    <Area
                      type="monotone"
                      dataKey="line2"
                      stackId="2"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.3}
                    />
                    <Area
                      type="monotone"
                      dataKey="line3"
                      stackId="3"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}