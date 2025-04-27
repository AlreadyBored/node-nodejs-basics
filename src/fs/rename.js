import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const sourceFile = path.join(__dirname, 'files', 'wrongFilename.txt');
  const destFile = path.join(__dirname, 'files', 'properFilename.md');

  if (!await isFileExist(sourceFile)) {
    throw new Error('FS operation failed');
  }

  if (await isFileExist(destFile)) {
    throw new Error('FS operation failed');
  }

  await fs.rename(sourceFile, destFile);
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

await rename();
