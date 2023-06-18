import { mkdir, copyFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { isExists, getFiles } from '../utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  const fromFolderPath = join(__dirname, 'files');
  const toFolderPath = join(__dirname, 'files_copy');

  if (await isExists(fromFolderPath) && await isExists(toFolderPath)) {
    throw new Error('FS operation failed');
  }
  try {
    console.log(`Copy files from "files" to "files_copy":`);
    await mkdir(toFolderPath, { recursive: true });
    (await getFiles(fromFolderPath)).forEach(file => {
      copyFile(
        `${fromFolderPath}/${file}`,
        `${toFolderPath}/${file}`
      );
      console.log(`- OK: ${file}`);
    })
    console.log(`All files has been copied`);
  } catch (error) {
    console.log('🚀 ~ copy ~ error:', error);
  }
};

await copy();
