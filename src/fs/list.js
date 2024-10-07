import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const dirPath = path.join(__dirname, 'files');

  try {
    // check if directory exists
    await fs.access(dirPath);
    // read directory contents
    const files = await fs.readdir(dirPath);
    // print the array of filenames
    console.log(files);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();