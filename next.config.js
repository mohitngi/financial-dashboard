// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable server-side rendering
  optimizeFonts: false,
  eslint: {
    // Enable ESLint during builds
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Enable TypeScript type checking during build
    ignoreBuildErrors: false,
  },
  images: { 
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Suppress the punycode deprecation warning
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        punycode: false
      };
    }
    
    // Ignore specific warnings
    config.ignoreWarnings = [
      /the request of a dependency is an expression/,
      /Critical dependency: the request of a dependency is an expression/
    ];
    
    return config;
  },
};

// Suppress specific deprecation warnings in the console
const originalConsoleWarn = console.warn;
console.warn = function (message, ...args) {
  if (typeof message === 'string' && message.includes('punycode')) {
    return;
  }
  originalConsoleWarn.apply(console, [message, ...args]);
};

module.exports = nextConfig;
