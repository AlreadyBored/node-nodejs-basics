import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const compress = async () => {
  const fileName = 'fileToCompress.txt';
  const currentDir = path.dirname(fileURLToPath(import.meta.url));
  const sourceFilePath = path.join(currentDir, 'files', fileName);
  const destinationFilePath = path.join(currentDir, 'files', 'archive.gz');

  try {
    const input = createReadStream(sourceFilePath);
    const output = createWriteStream(destinationFilePath);
    const gzip = zlib.createGzip();

    await new Promise((resolve, reject) => {
      input.pipe(gzip).pipe(output);
      output.on('finish', resolve);
      output.on('error', reject);
    });

    console.log(`File compressed successfully. Archive saved to ${destinationFilePath}`);
  } catch (error) {
    console.error('Compression failed:', error.message);
  }
};

await compress();