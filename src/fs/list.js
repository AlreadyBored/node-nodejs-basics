import { fileURLToPath } from 'node:url';
import { readdir } from 'node:fs/promises';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorMessage = 'FS operation failed';

const list = async () => {
  const pathToFolder = path.join(__dirname, 'files');
  try {
    const files = await readdir(pathToFolder);
    for (const file of files) console.log(file);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await list();
