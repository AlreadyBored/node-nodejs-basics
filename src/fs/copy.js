import { readdir, mkdir, copyFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const copy = async () => {
  const filename = fileURLToPath(import.meta.url);
  const currentPath = join(dirname(filename), 'files');
  const newDirPath = `${currentPath}_copy`;

  try {
    const dir = await readdir(currentPath);
    await mkdir(newDirPath);
    dir.forEach(async (file) => {
      const currentFilePath = join(currentPath, file);
      const newFilePath = join(newDirPath, file);
      await copyFile(currentFilePath, newFilePath);
    });
  } catch {
    console.error(new Error('FS operation failed'));
  }
};

// copy();
