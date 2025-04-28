import { mkdir, copyFile, readdir, stat } from 'fs/promises';
import { join } from 'path';

const copy = async () => {
  const srcFolder = join('src', 'fs', 'files');
  const destFolder = join('src', 'fs', 'files_copy');

  try {
    const srcStats = await stat(srcFolder);
    await mkdir(destFolder, { recursive: false });

    const items = await readdir(srcFolder);

    for (const item of items) {
      const srcPath = join(srcFolder, item);
      const destPath = join(destFolder, item);
      await copyFile(srcPath, destPath);
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
