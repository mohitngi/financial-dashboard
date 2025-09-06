# WealthElite Financial Dashboard

A comprehensive financial dashboard built with Next.js 14, featuring PDF export capabilities and mobile app support through Capacitor.

## Features

- 📊 **Interactive Dashboard**: Real-time financial data visualization
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 📄 **PDF Export**: Generate comprehensive reports with all dashboard data
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📱 **Mobile App**: Convert to native Android/iOS apps using Capacitor
- 📈 **Charts & Analytics**: Multiple chart types using Recharts
- 🎨 **Modern UI**: Built with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **PDF Generation**: jsPDF + html2canvas
- **Mobile**: Capacitor
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

### Development

```bash
# Install dependencies
pnpm install  # or npm install

# Run development server
pnpm dev      # or npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Building for Production

```bash
# Build the application
pnpm build    # or npm run build

# Start production server
pnpm start    # or npm start
```

### Mobile App Development

#### Prerequisites
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

#### Setup Mobile Apps

```bash
# Build the web app first
pnpm build    # or npm run build

# Add mobile platforms
pnpm cap:add:android    # or npm run cap:add:android
pnpm cap:add:ios        # or npm run cap:add:ios

# Sync web assets with mobile apps
pnpm cap:sync           # or npm run cap:sync

# Open in native IDEs
pnpm cap:open:android   # or npm run cap:open:android
pnpm cap:open:ios       # or npm run cap:open:ios
```

#### Mobile Build Process

```bash
# Build and sync for mobile
pnpm mobile:build    # or npm run mobile:build
```

## Dashboard Features

### Main Metrics
- **AUM (Assets Under Management)**: Current value with MoM percentage change
- **SIP (Systematic Investment Plan)**: Current value with growth indicators

### Time Range Filters
- 3 Days, 7 Days, 10 Days, 30 Days
- Dynamic data fetching based on selected range

### Statistics Cards
- Purchases
- Redemptions
- Rejected Transactions
- SIP Rejections
- New SIP

### Charts & Visualizations
1. **Clients Distribution**: Pie chart showing client categories
2. **SIP Business Chart**: Combined bar and line chart
3. **Monthly MIS**: Multi-line chart for monthly performance

### PDF Export
- Comprehensive report generation
- Includes all major statistics and metrics
- Professional formatting with company branding

## API Endpoints

### Dashboard Data
```
GET /api/dashboard?timeRange=3Days
```

Returns complete dashboard data including AUM, SIP, statistics, and chart data.

## Mobile App Features

- Native performance on Android and iOS
- Offline capability for cached data
- Native UI components
- Push notifications support (configurable)
- App store ready

## Customization

### Themes
The app supports both light and dark modes with automatic system preference detection.

### Colors
Primary color scheme uses red (#ef4444) for branding, with blue and green accents for data visualization.

### Charts
All charts are responsive and support:
- Hover interactions
- Tooltips
- Custom colors
- Animation effects

## Deployment

### Web Deployment
The app is configured for static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Mobile App Store Deployment
After building with Capacitor:
1. Open the project in Android Studio/Xcode
2. Configure app signing
3. Build release versions
4. Submit to Google Play Store/Apple App Store

## Performance Optimizations

- Static generation for faster loading
- Optimized images and assets
- Lazy loading for charts
- Efficient re-rendering with React hooks
- Mobile-optimized bundle sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

