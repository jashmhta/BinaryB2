const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const optimizedDir = path.join(publicDir, 'optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

const imageFiles = [
  '1000112610.png',
  'about-bonds.jpg',
  'hero-corporate-underwriting.jpg',
  'hero-credit-rating.jpg',
  'hero-government-securities.png',
  'hero-high-yield-bonds.jpg',
  'hero-portfolio-management.jpg',
  'hero-secondary-trading.jpg',
  'institutional-clients.jpg',
  'market-analysis.jpg',
  'service-corporate-bonds.jpg',
  'service-credit-rating.jpg',
  'service-government-securities.jpg',
  'service-high-yield-bonds.jpg',
  'service-portfolio-management.jpg',
  'service-secondary-trading.jpg',
  'skyline.png',
  'hero-background-bonds.png',
  'footer-background-bonds.png'
];

async function optimizeImage(filename) {
  const inputPath = path.join(publicDir, filename);
  const ext = path.extname(filename);
  const baseName = path.basename(filename, ext);
  
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024).toFixed(2);
    
    // Convert to WebP for modern browsers
    const webpPath = path.join(optimizedDir, `${baseName}.webp`);
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);
    
    const webpStats = fs.statSync(webpPath);
    const webpSize = (webpStats.size / 1024).toFixed(2);
    
    // Also create optimized JPEG/PNG fallback
    const fallbackPath = path.join(optimizedDir, filename);
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(inputPath)
        .jpeg({ quality: 85, progressive: true })
        .toFile(fallbackPath);
    } else if (ext === '.png') {
      await sharp(inputPath)
        .png({ quality: 85, compressionLevel: 9 })
        .toFile(fallbackPath);
    }
    
    const fallbackStats = fs.statSync(fallbackPath);
    const fallbackSize = (fallbackStats.size / 1024).toFixed(2);
    
    console.log(`✓ ${filename}`);
    console.log(`  Original: ${originalSize}KB`);
    console.log(`  WebP: ${webpSize}KB (${((1 - webpStats.size / stats.size) * 100).toFixed(1)}% reduction)`);
    console.log(`  Fallback: ${fallbackSize}KB (${((1 - fallbackStats.size / stats.size) * 100).toFixed(1)}% reduction)`);
    console.log('');
    
  } catch (error) {
    console.error(`✗ Error optimizing ${filename}:`, error.message);
  }
}

async function optimizeAll() {
  console.log('Starting image optimization...\n');
  
  for (const file of imageFiles) {
    await optimizeImage(file);
  }
  
  console.log('Image optimization complete!');
}

optimizeAll();
