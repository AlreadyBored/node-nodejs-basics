import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorMessage = 'FS operation failed';

const read = async () => {
  const fileName = 'fileToRead.txt';
  const targetPath = `${__dirname}/files/${fileName}`;
  try {
    const text = await readFile(targetPath);
    console.log(text.toString());
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await read();
