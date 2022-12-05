import { readdir, access, mkdir, copyFile } from 'node:fs/promises';

const copy = async () => {
  const path = './files';
  const copyFolderPath = `${path}_copy`;
  const files = await readdir(path);

  try {
    await access(path);
    await mkdir(copyFolderPath);
    for (const file of files) {
      await copyFile(`${path}/${file}`, `${copyFolderPath}/${file}`);
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
