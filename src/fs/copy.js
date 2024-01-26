import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { access, mkdir, readdir, stat, copyFile } from 'fs/promises';

const pathExists = async (path) => {
  try {
    await access(path);
    return true;
  } catch (error) {
    return false;
  }
};

const copyDirectory = async (srcPath, destPath) => {
  await mkdir(destPath, { recursive: true });

  const items = await readdir(srcPath);

  await Promise.all(
    items.map(async (item) => {
      const sourceItem = join(srcPath, item);
      const destItem = join(destPath, item);

      try {
        const itemStat = await stat(sourceItem);

        if (itemStat.isFile()) {
          await copyFile(sourceItem, destItem);
        } else if (itemStat.isDirectory()) {
          await copyDirectory(sourceItem, destItem);
        }
      } catch (error) {
        console.error(`Error processing item ${item}: ${error.message}`);
      }
    })
  );
};

const copy = async () => {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const srcPath = join(currentDir, 'files');
  const destPath = join(currentDir, 'files_copy');

  const srcExists = await pathExists(srcPath);
  const destExists = await pathExists(destPath);

  if (!srcExists || destExists) throw new Error('FS operation failed');

  try {
    await copyDirectory(srcPath, destPath);
    console.log(`Directory successfully copied`);
  } catch (error) {
    console.error('Error copying directory');
  }
};

await copy();
