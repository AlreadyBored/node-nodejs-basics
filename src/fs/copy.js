import fs from 'fs';
import path from 'path';

async function copy() {
  const filePath = 'src/fs/files';
  const destPath = 'src/fs/files_copy';

  try {
    await fs.promises.mkdir(destPath);

    const files = await fs.promises.readdir(filePath);

    for (const file of files) {
      const sourcePath = path.join(filePath, file);
      const destinPath = path.join(destPath, file);
      const stat = await fs.promises.lstat(sourcePath);

      if (stat.isDirectory()) {
        await copy(sourcePath, destinPath);
      } else {
        await fs.promises.copyFile(sourcePath, destinPath);
      }
    }

  } catch (error) {
    throw new Error('FS operation failed');
  }
}

await copy();
