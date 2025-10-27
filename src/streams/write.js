import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

export const write = async () => {
  const stream = createWriteStream(filePath, { encoding: 'utf8' });

  try {
    await pipeline(process.stdin, stream);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

await write();
