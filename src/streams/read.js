import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';

const read = async () => {
  try {
    const filePath = path.join('src', 'streams', 'files', 'fileToRead.txt');

    await fs.promises.access(filePath);

    const fileStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

    await pipeline(fileStream, process.stdout);

  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
