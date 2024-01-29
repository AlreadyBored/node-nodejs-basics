import { promises as fs, createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const decompress = async () => {
  const currentDir = path.dirname(fileURLToPath(import.meta.url));
  const sourceFilePath = path.join(currentDir, 'files', 'archive.gz');
  const destinationFilePath = path.join(currentDir, 'files', 'fileToCompress.txt');

  try {
    const input = createReadStream(sourceFilePath);
    const output = createWriteStream(destinationFilePath);
    const gunzip = zlib.createGunzip();

    await new Promise((resolve, reject) => {
      input.pipe(gunzip).pipe(output);
      output.on('finish', resolve);
      output.on('error', reject);
    });

    console.log(`File decompressed successfully. Result saved to ${destinationFilePath}`);
  } catch (error) {
    console.error('Decompression failed:', error.message);
  }
};

await decompress();