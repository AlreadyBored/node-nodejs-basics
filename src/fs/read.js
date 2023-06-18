import { createReadStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';
import { isExists } from '../utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const filePath = join(__dirname, 'files/fileToRead.txt');

  if (!await isExists(filePath)) {
    throw new Error('FS operation failed');
  }

  try {
    console.log('File fileToRead.txt contains:\n');
    createReadStream(filePath, 'utf-8').pipe(stdout);
  } catch (error) {
    console.log('🚀 ~ read ~ error:', error);
  }
};

await read();