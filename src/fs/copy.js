import { promises as fsPromises, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

async function copy(src, dest) {
  try {
    if (!existsSync(src)) {
      throw new Error('Source folder does not exist');
    }

    if (existsSync(dest)) {
      throw new Error('Destination folder already exists');
    }

    mkdirSync(dest);

    const files = await fsPromises.readdir(src);

    for (const file of files) {
      const srcPath = join(src, file);
      const destPath = join(dest, file);
      const isDirectory = (await fsPromises.stat(srcPath)).isDirectory();

      if (isDirectory) {
        await copyFolder(srcPath, destPath);
      } else {
        await fsPromises.copyFile(srcPath, destPath);
      }
    }

    console.log('Folder copied successfully!');
  } catch (error) {
    console.error(`FS operation failed: ${error.message}`);
    throw error;
  }
}

const sourceFolder = 'files';
const destinationFolder = 'files_copy';

await copy(sourceFolder, destinationFolder);