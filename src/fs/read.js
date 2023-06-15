import { readFile, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = join(__dirname, 'files', 'fileToRead.txt');

  try {
    await access(filePath);
    const content = await readFile(filePath, 'utf8');

    console.log(content);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
