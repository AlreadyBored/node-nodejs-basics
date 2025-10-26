import fs from 'fs/promises';
import path from 'path';

const rename = async () => {
  const folder = path.join('src', 'fs', 'files');
  const oldName = 'wrongFilename.txt';
  const newName = 'properFilename.md';

  const oldPath = path.join(folder, oldName);
  const newPath = path.join(folder, newName);

  try {
    await fs.access(oldPath);

    try {
      await fs.access(newPath);
      throw new Error('FS operation failed');
    } catch {

    }

    await fs.rename(oldPath, newPath);
    console.log(`${oldName} переименован в ${newName}`);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
