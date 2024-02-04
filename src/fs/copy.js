import { fileURLToPath } from 'url';
import { promises as fsPromises, existsSync, mkdirSync } from 'fs';
import { join, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

async function copy(src, dest) {
  try {
    const currentDir = __dirname;
    const srcPath = resolve(currentDir, src);
    const destPath = resolve(currentDir, dest);

    if (!existsSync(srcPath)) {
      throw new Error('Source folder does not exist');
    }

    if (existsSync(destPath)) {
      throw new Error('Destination folder already exists');
    }

    mkdirSync(destPath);

    const files = await fsPromises.readdir(srcPath);

    for (const file of files) {
      const fileSrcPath = join(srcPath, file);
      const fileDestPath = join(destPath, file);
      const isDirectory = (await fsPromises.stat(fileSrcPath)).isDirectory();

      if (isDirectory) {
        await copyFolder(fileSrcPath, fileDestPath);
      } else {
        await fsPromises.copyFile(fileSrcPath, fileDestPath);
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