import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pipeline } from 'stream/promises';

const write = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const writeStream = createWriteStream(join(__dirname, 'files', 'fileToWrite.txt'));
    await pipeline(process.stdin, writeStream);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await write();