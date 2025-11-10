import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    await fs.access(filePath);
  } catch {
    throw new Error('FS operation failed');
  }

  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
