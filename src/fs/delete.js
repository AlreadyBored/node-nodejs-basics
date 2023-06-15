import { unlink, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const fileToRemovePath = join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await access(fileToRemovePath);
    await unlink(fileToRemovePath);
    console.log('File removed successfully.');
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
