import { readdir, mkdir } from 'fs';
import { readdirSync, statSync, mkdirSync, copyFileSync, constants, existsSync } from 'fs';
import { join } from 'path';

const copy = async () => {
    const newFilesDir = './src/fs/files_copy';
    const source = './src/fs/files';
    if (!existsSync(newFilesDir)) {
      mkdirSync(newFilesDir);
    } else {
      throw new Error('FS operation failed');
    }
  
    if (!existsSync(source)) {
      throw new Error('FS operation failed');
    }

    const files = readdirSync(source);
  
    files.forEach((file) => {
      const sourcePath = join(source, file);
      const destinationPath = join(newFilesDir, file);
  
      const isDirectory = statSync(sourcePath).isDirectory();
  
      if (isDirectory) {
        copy(sourcePath, destinationPath);
      } else {
        copyFileSync(sourcePath, destinationPath);
      }
    });
};

await copy();
