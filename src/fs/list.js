import { readdir, stat, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const pathExists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

const printDir = async (dirPath) => {
  const items = await readdir(dirPath);

  await Promise.all(
    items.map(async (item) => {
      const itemPath = join(dirPath, item);

      try {
        const itemStat = await stat(itemPath);

        if (itemStat.isFile()) {
          console.log(itemPath);
        } else if (itemStat.isDirectory()) {
          await printDir(itemPath);
        }
      } catch (error) {
        console.error(`Error processing item ${item}: ${error.message}`);
      }
    })
  );

  return;
};

const list = async () => {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const srcDir = join(currentDir, 'files');

  const dirExists = await pathExists(srcDir);

  if (!dirExists) throw new Error('FS operation failed');

  try {
    await printDir(srcDir);
  } catch (error) {
    console.error(error);
  }
};

await list();
