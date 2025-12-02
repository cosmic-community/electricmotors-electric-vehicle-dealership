const fs = require('fs');
const path = require('path');

const outputDir = path.join(process.cwd(), '.next/static');
const scriptPath = path.join(process.cwd(), 'public/dashboard-console-capture.js');

function injectScript(htmlPath) {
  try {
    let html = fs.readFileSync(htmlPath, 'utf8');
    const script = fs.readFileSync(scriptPath, 'utf8');
    
    const scriptTag = `<script>${script}</script>`;
    
    if (!html.includes('dashboard-console-capture')) {
      html = html.replace('</head>', `${scriptTag}</head>`);
      fs.writeFileSync(htmlPath, html);
      console.log(`✓ Injected console capture into ${htmlPath}`);
    }
  } catch (error) {
    console.error(`Error processing ${htmlPath}:`, error.message);
  }
}

function walkDir(dir) {
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.html')) {
        injectScript(filePath);
      }
    });
  } catch (error) {
    console.error(`Error walking directory ${dir}:`, error.message);
  }
}

if (fs.existsSync(outputDir)) {
  console.log('Injecting console capture script...');
  walkDir(outputDir);
  console.log('Console capture injection complete!');
} else {
  console.log('Output directory not found. Skipping injection.');
}