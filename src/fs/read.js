import { readFile, access, constants } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const read = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    const contents = await readFile(filePath);
    console.log(contents.toString());
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();