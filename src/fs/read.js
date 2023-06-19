import url from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const content = await fs.readFile(filePath, { encoding: 'utf8' });
    console.log(content);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
