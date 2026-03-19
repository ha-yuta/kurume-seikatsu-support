import sharp from 'sharp';
import { readdir, unlink } from 'fs/promises';
import { join, basename, extname } from 'path';

const imagesDir = './public/images';

async function convertImages() {
  const files = await readdir(imagesDir);
  const jpgFiles = files.filter(f => /\.(jpg|jpeg)$/i.test(f));

  console.log(`Found ${jpgFiles.length} JPG files to convert`);

  for (const file of jpgFiles) {
    const inputPath = join(imagesDir, file);
    const outputName = basename(file, extname(file)) + '.webp';
    const outputPath = join(imagesDir, outputName);

    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log(`✓ Converted: ${file} → ${outputName}`);

      // Delete original JPG
      await unlink(inputPath);
      console.log(`  Deleted: ${file}`);
    } catch (err) {
      console.error(`✗ Error converting ${file}:`, err.message);
    }
  }

  console.log('\nConversion complete!');
}

convertImages();
