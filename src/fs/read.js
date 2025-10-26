import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
  try {
    const content = await readFile(filePath, 'utf-8');
    console.log(content);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
