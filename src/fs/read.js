import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';


const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    await fs.access(filePath);
  } catch (err) {
    throw new Error('FS operation failed');
  }

  try {
    const content = await fs.readFile(filePath, 'utf8');
    console.log(content);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();