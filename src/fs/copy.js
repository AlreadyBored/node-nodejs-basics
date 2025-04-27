import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const sourceDir = path.join(__dirname, 'files');
  const destDir = path.join(__dirname, 'files_copy');

  if (!await isDirectoryExist(sourceDir)) {
    throw new Error('FS operation failed');
  }

  if (await isDirectoryExist(destDir)) {
    throw new Error('FS operation failed');
  }

  await fs.mkdir(destDir);

  await copyContents(sourceDir, destDir);
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

const copyContents = async (sourceDir, destDir) => {
  const entries = await fs.readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      await fs.mkdir(destPath);
      await copyContents(sourcePath, destPath);
    } else {
      await fs.copyFile(sourcePath, destPath);
    }
  }
};

await copy();
