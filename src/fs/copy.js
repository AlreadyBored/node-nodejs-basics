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

  const files = await readdir(srcPath);

  await Promise.all(
    files.map(async (file) => {
      const sourceFile = join(srcPath, file);
      const destFile = join(destPath, file);

      try {
        const fileStat = await stat(sourceFile);

        if (fileStat.isFile()) {
          await copyFile(sourceFile, destFile);
        } else if (fileStat.isDirectory()) {
          await copyDirectory(sourceFile, destFile);
        }
      } catch (error) {
        console.error(`Error processing file ${file}: ${error.message}`);
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
