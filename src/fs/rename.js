import url from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newPath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    const isNewPathExists = await checkFileExists(newPath);
    if (!isNewPathExists) {
      await fs.rename(oldPath, newPath);
    } else {
      throw new Error('New path already exists');
    }
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

const checkFileExists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch (err) {
    return false;
  }
};

await rename();
