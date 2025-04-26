import fs from 'node:fs/promises';
import path from 'node:path';

const folderName = path.join('src', 'fs', 'files');
const newFolderName = path.join('src', 'fs', 'files_copy');
const err = new Error('FS operation failed');

const copy = async () => {
  try {
    await fs.stat(folderName);

    try {
      await fs.stat(newFolderName);
      throw err;
    } catch (e) {
      if (e.code !== 'ENOENT') throw err;
    }

    await fs.mkdir(newFolderName, { recursive: true });

    const files = await fs.readdir(folderName);
    await Promise.all(
      files.map(async (file) => {
        const srcPath = path.join(folderName, file);
        const destPath = path.join(newFolderName, file);

        const stat = await fs.stat(srcPath);
        if (stat.isFile()) {
          const content = await fs.readFile(srcPath, 'utf8');
          await fs.writeFile(destPath, content);
        }
      })
    );
  } catch {
    throw err;
  }
};

await copy();
