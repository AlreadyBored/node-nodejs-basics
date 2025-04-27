import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

  if (!await isFileExist(filePath)) {
    throw new Error('FS operation failed');
  }

  await fs.unlink(filePath);
};

const isFileExist = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') { // File does not exist
      return false;
    }
    throw error;
  }
};

await remove();
