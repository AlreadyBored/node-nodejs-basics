import { access, unlink } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await access(filePath);
    await unlink(filePath);

    console.log('File removed successfully.');
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
