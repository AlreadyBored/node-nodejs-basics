import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const fileName = 'fresh.txt'
const text = 'I am fresh and young';
// it could be simplified by providing manually constructed path, example 'src/fs/files'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToWrite = path.join(__dirname, 'files', fileName);

const create = async () => {
  try { 
    await fs.writeFile(fileToWrite, text, {flag: 'wx'});
  }
  catch(error) {
    throw new Error('FS operation failed');
  }
}

await create();
