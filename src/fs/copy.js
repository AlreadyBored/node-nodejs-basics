import path from 'path';
import { fileURLToPath } from 'url';
import { promises } from 'node:fs';

const { access, mkdir, readdir, copyFile } = promises;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  try {
    await access(path.join(__dirname, 'files'));
    try {
      await access(path.join(__dirname, 'files_copy'));
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code === 'ENOENT') {
        await mkdir(path.join(__dirname, 'files_copy'));
        const files = await readdir(path.join(__dirname, 'files'));
        await Promise.all(files.map((file) => copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files_copy', file))));
      } else {
        throw err;
      }
    }
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
