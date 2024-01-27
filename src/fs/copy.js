import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdir, readdir, stat, copyFile } from 'fs/promises';
import { pathExists } from './path-exists.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_DIR = join(__dirname, 'files');
const DEST_DIR = join(__dirname, 'files_copy');

const copyDir = async (src, dest) => {
  await mkdir(dest, { recursive: true });
  const items = await readdir(src);

  await Promise.all(
    items.map(async (item) => {
      const srcItem = join(src, item);
      const destItem = join(dest, item);

      try {
        const itemStat = await stat(srcItem);

        if (itemStat.isFile()) {
          await copyFile(srcItem, destItem);
        } else if (itemStat.isDirectory()) {
          await copyDirectory(srcItem, destItem);
        }
      } catch (error) {
        console.error(`Error processing item ${item}: ${error.message}`);
      }
    })
  );
};

const copy = async () => {
  const srcDirExists = await pathExists(SRC_DIR);
  const destDirExists = await pathExists(DEST_DIR);

  if (!srcDirExists || destDirExists) throw new Error('FS operation failed');

  try {
    await copyDir(SRC_DIR, DEST_DIR);
    console.log(`Directory successfully copied`);
  } catch (error) {
    console.error('Error copying directory');
  }
};

await copy();
