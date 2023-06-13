import { existsSync } from 'node:fs';
import { readdir, copyFile, mkdir } from 'node:fs/promises'

const copy = async () => {
    // Write your code here
  const __basicsDir = new URL(".", import.meta.url).pathname;
  const filesDir = `${__basicsDir}files/`;
  const filesCopyDir = `${__basicsDir}files_copy/`;

  try {
    if (!existsSync(filesDir) || existsSync(filesCopyDir)) throw Error('FS operation failed');

    await mkdir(filesCopyDir, { recursive: true });

    const files = await readdir(filesDir);
    for (const file of files) {
      await copyFile(`${filesDir}${file}`, `${filesCopyDir}${file}`);
    }
  } catch (e) {
    console.error(e);
  }
};

await copy();
