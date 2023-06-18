import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { isExists, getFiles } from '../utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  const folderPath = join(__dirname, 'files');

  if (!await isExists(folderPath)) {
    throw new Error('FS operation failed');
  }

  console.log('Files in folder:');
  (await getFiles(folderPath)).forEach(file => {
    console.log(`- ${file}`);
  })
};

await list();