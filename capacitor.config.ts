import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wealthelite.dashboard',
  appName: 'WealthElite Dashboard',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ef4444',
      showSpinner: false,
      androidScaleType: 'CENTER_CROP',
      splashFullScreen: true,
      splashImmersive: true
    },
    Keyboard: {
      resize: 'body',
      resizeOnFullScreen: true
    }
  },
  android: {
    buildOptions: {
      keystorePath: 'path/to/keystore.jks',
      keystoreAlias: 'key0',
    },
    allowMixedContent: true
  },
  ios: {
    scheme: 'App',
    scrollEnabled: true,
    allowsLinkPreview: true
  }
};

// Enable live reload in development
if (process.env.NODE_ENV === 'development') {
  config.server = {
    url: 'http://YOUR_LOCAL_IP:3000',
    cleartext: true
  };
}

export default config;