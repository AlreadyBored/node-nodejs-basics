import fs from 'fs';
import path from 'path';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
      
const decompress = async () => {
  const inputFile = path.join(__dirname, 'files', 'archive.gz');
  const outputFile = path.join(__dirname, 'files', 'fileToCompress.txt');

  const gunzip = createGunzip();
  const source = fs.createReadStream(inputFile);
  const destination = fs.createWriteStream(outputFile);

  try {
    await pipeline(source, gunzip, destination);
    console.log('✅ Decompression complete.');
  } catch (err) {
    console.error(' Decompression failed:', err.message);
    throw new Error('FS operation failed');
  }
};

await decompress();
