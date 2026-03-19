import sharp from 'sharp';
import { readFileSync } from 'fs';

const svgBuffer = readFileSync('./public/favicon.svg');

async function generateFavicons() {
  // Generate favicon.ico (32x32 PNG)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile('./public/favicon.ico');
  console.log('✓ Generated favicon.ico (32x32)');

  // Generate apple-touch-icon (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile('./public/apple-touch-icon.png');
  console.log('✓ Generated apple-touch-icon.png (180x180)');

  // Generate favicon-16x16
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile('./public/favicon-16x16.png');
  console.log('✓ Generated favicon-16x16.png');

  // Generate favicon-32x32
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile('./public/favicon-32x32.png');
  console.log('✓ Generated favicon-32x32.png');

  console.log('\nFavicon generation complete!');
}

generateFavicons();
