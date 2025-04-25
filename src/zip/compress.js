import fs from 'fs';
import path from 'path';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const inputFile = path.join(__dirname, 'files', 'fileToCompress.txt');
  const outputFile = path.join(__dirname, 'files', 'archive.gz');

  const gzip = createGzip();
  const source = fs.createReadStream(inputFile);
  const destination = fs.createWriteStream(outputFile);

  try {
    await pipeline(source, gzip, destination);
    console.log(' Compression complete.');
  } catch (err) {
    console.error('Compression failed:', err.message);
    throw new Error('FS operation failed');
  }
};

await compress();
     