import path from 'path';
import { fileURLToPath } from 'url';
import { promises } from 'fs';
import { checkFileExists } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    const existsFileToRead = await checkFileExists(fileToRead);

    if (existsFileToRead) {
      const content = await promises.readFile(fileToRead, 'utf-8');
      console.log(content);
    } else {
      throw new Error('FS operation failed');
    }
  } catch (err) {
    throw err;
  }
};

await read();
