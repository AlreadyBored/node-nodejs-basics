import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    // check if file exists
    await fs.access(filePath);
    // read the file content
    const content = await fs.readFile(filePath, 'utf8');
    // print the content
    console.log(content);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();