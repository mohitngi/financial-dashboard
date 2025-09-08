const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get local IP address
function getLocalIpAddress() {
  try {
    const ip = execSync('node scripts/get-ip.js').toString().trim();
    return ip || 'localhost';
  } catch (error) {
    console.error('Error getting local IP:', error.message);
    return 'localhost';
  }
}

// Update capacitor.config.ts with local IP
function updateCapacitorConfig(ip) {
  const configPath = path.join(__dirname, '../capacitor.config.ts');
  
  try {
    let content = fs.readFileSync(configPath, 'utf8');
    
    // Update the development server URL
    content = content.replace(
      /url: 'http:\/\/YOUR_LOCAL_IP:3000'/,
      `url: 'http://${ip}:3000'`
    );
    
    fs.writeFileSync(configPath, content, 'utf8');
    console.log(`✅ Updated Capacitor config with local IP: ${ip}`);
  } catch (error) {
    console.error('Error updating Capacitor config:', error.message);
    process.exit(1);
  }
}

const localIp = getLocalIpAddress();
updateCapacitorConfig(localIp);
