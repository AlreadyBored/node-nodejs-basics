import { copyFile, cp, mkdir, readdir, unlink } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filesFolder = path.join(__dirname, 'files');
const filesFolderCopy = path.join(__dirname, 'files-copy');

const copy = async () => {
  try {
    await cp(filesFolder, filesFolderCopy, { recursive: true, force: false, errorOnExist: true });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
