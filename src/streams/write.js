import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const write = async () => {
  const filePath = new URL('./files/fileToWrite.txt', import.meta.url);
  const writeStream = fs.createWriteStream(filePath, { encoding: 'utf-8' });
   const mockData = process.stdin ? Readable.from('Hello world\n') : process.stdin;
  

  try {
    await pipeline(mockData, writeStream);
  } catch {
    throw new Error('FS operation failed');
  }
};

await write();
