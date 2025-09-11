const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../app/api/dashboard');
const routeFiles = fs.readdirSync(routesDir)
  .filter(file => file.endsWith('route.ts') && file !== 'route.ts');

routeFiles.forEach(file => {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add dynamic export if not present
  if (!content.includes('export const dynamic')) {
    const updatedContent = content.replace(
      /import\s+{\s*NextResponse\s*}\s+from\s+'next\/server';/,
      `import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';`
    );
    
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated: ${file}`);
  } else {
    console.log(`Skipped (already updated): ${file}`);
  }
});
