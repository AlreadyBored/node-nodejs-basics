import { mkdir, readdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { CopyError } from '../errors/copyError.js';
import { exists } from '../utils/exists.js';

export const copy = async () => {
  try {
    const src = './src/fs/files';
    const dest = './src/fs/files_copy';
    if (await exists(dest)) throw new CopyError('Such folder is already exists.');
    await mkdir(dest, { recursive: true });
    const entries = await readdir(src, { withFileTypes: true });

    for (let entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      entry.isDirectory() ? await copyDir(srcPath, destPath) : await copyFile(srcPath, destPath);
    }
  } catch (error) {
    console.error('\x1b[31m', error, `\n`);
  }
};
