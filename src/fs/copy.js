import { readdir, access, mkdir, copyFile } from 'node:fs/promises';

const copy = async () => {
  const path = './files'
  const copyPath = `${path}_copy`
  const files = await readdir(path);

  try {
    await access(path);
    await mkdir(copyPath);
    for (const file of files) {
      await copyFile(`${path}/${file}`, `${copyPath}/${file}`);
    }
  } catch {
    throw new Error('FS operation failed')
  }
};

await copy();
