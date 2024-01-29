import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir, mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcPath = join(__dirname, 'files');
const destPath = join(__dirname, 'files_copy');

const copy = async () => {
  try {
    const files = await readdir(srcPath);
    await mkdir(destPath);

    for (const file of files) {
      const curSrc = resolve(srcPath, file);
      const curDest = resolve(destPath, file);

      const data = await readFile(curSrc, {encoding: 'utf8'});

      await writeFile(curDest, data, {flag: 'wx'});
    }
    console.log(`The contents of the folder 'files' was copied to the folder 'files_copy'`);
  } catch(e) {
    throw new Error ('FS operation failed');
  }
};

await copy();
