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

## 📱 Mobile App Setup

### Prerequisites

#### For Android Development
- [Android Studio](https://developer.android.com/studio) (latest version)
- Android SDK (installed via Android Studio)
- Java Development Kit (JDK) 17 or later
- Environment variables set:
  - `ANDROID_HOME`
  - `JAVA_HOME`

#### For iOS Development (macOS only)
- [Xcode](https://developer.apple.com/xcode/) 14+
- CocoaPods: `sudo gem install cocoapods`
- macOS 12.0 or later
- iOS 14.0 or later

### Development Workflow

#### 1. Initial Setup

```bash
# Install dependencies
pnpm install

# Build the web app
pnpm build

# Initialize Capacitor (if not already done)
pnpm mobile:init

# Add mobile platforms
pnpm mobile:add:android
pnpm mobile:add:ios    # macOS only
```

#### 2. Development with Live Reload

For Android:
```bash
# Start Next.js dev server
pnpm dev

# In a new terminal, run:
pnpm mobile:dev:android
```

For iOS (macOS only):
```bash
# Start Next.js dev server
pnpm dev

# In a new terminal, run:
pnpm mobile:dev:ios
```

#### 3. Building for Production

```bash
# Build the production web app
pnpm build

# Sync with native projects
pnpm mobile:build

# Open in native IDEs for final build
pnpm mobile:open:android   # For Android
pnpm mobile:open:ios       # For iOS (macOS only)
```

### Testing on Devices

#### Android
1. Enable Developer Options on your Android device
2. Enable USB Debugging
3. Connect device via USB
4. Run: `pnpm mobile:run:android`

#### iOS (macOS only)
1. Connect your iOS device
2. Open Xcode and select your device
3. Run: `pnpm mobile:run:ios`

### Advanced Configuration

#### Environment Variables
Create a `.env.local` file with:
```env
NEXT_PUBLIC_API_URL=your_api_url
# Other environment variables
```

#### Capacitor Plugins
Additional plugins can be installed as needed:
```bash
pnpm add @capacitor/camera @capacitor/geolocation
npx cap sync
```

### Troubleshooting

#### Common Issues
- **Android build fails**: Ensure all Android SDK components are installed
- **iOS build fails**: Run `pod install` in the `ios/App` directory
- **Live reload not working**: Check if your device is on the same network as your development machine
- **Missing icons**: Rebuild the web assets and sync again

#### Clearing Cache
```bash
# Clear Next.js cache
rm -rf .next/

# Clear Capacitor cache
rm -rf android/ ios/ node_modules/
pnpm install
```

### Deployment

#### Google Play Store
1. Generate a signed bundle:
   ```bash
   cd android
   ./gradlew bundleRelease
   ```
2. Upload the generated AAB file to Google Play Console

#### Apple App Store
1. Open the project in Xcode
2. Configure app signing
3. Archive and upload via Xcode Organizer

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

