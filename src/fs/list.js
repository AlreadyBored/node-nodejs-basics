import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const dirPath = path.join(__dirname, 'files');

  if (!await isDirectoryExist(dirPath)) {
    throw new Error('FS operation failed');
  }

  const files = await fs.readdir(dirPath);

  console.log(files);
};

const isDirectoryExist = async (dirPath) => {
  try {
    const stats = await fs.stat(dirPath);
    return stats.isDirectory();
  } catch (error) {
    if (error.code === 'ENOENT') { // Directory does not exist
      return false;
    }
    throw error;
  }
};

await list();
