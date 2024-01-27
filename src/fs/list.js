import { readdir, stat, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pathExists } from './path-exists.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TARGET_DIR = join(__dirname, 'files');

const printDir = async (path) => {
  const items = await readdir(path);

  await Promise.all(
    items.map(async (item) => {
      const itemPath = join(path, item);

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
  const dirExists = await pathExists(TARGET_DIR);

  if (!dirExists) throw new Error('FS operation failed');

  try {
    await printDir(TARGET_DIR);
  } catch (error) {
    console.error('Error printing directory contents:', error.message);
  }
};

await list();
