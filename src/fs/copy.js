import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copyFolder = async (src, dest) => {
  try {
    await fs.access(src);
  } catch (err) {
    throw new Error('FS operation failed');
  }

  try {
    await fs.access(dest);
    throw new Error('FS operation failed');
  } catch (err) {
    if (!err.message.includes('FS operation failed')) {
      await fs.mkdir(dest);
    } else {
      throw err;
    }
  }

  const entries = await fs.readdir(src);
  for (let entry of entries) {
    const srcPath = path.join(src, entry);
    const destPath = path.join(dest, entry);

    const stat = await fs.lstat(srcPath);
    if (stat.isDirectory()) {
      await copyFolder(srcPath, destPath);
    } else if (stat.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
};

const copy = async () => {
  const srcFolderPath = path.join(__dirname, 'files');
  const destFolderPath = path.join(__dirname, 'files_copy');
  await copyFolder(srcFolderPath, destFolderPath);
};

await copy();
