import { existsSync } from 'node:fs';
import { readdir, copyFile, mkdir } from 'node:fs/promises'

const copy = async () => {
    // Write your code here
  const __dirname = new URL(".", import.meta.url).pathname;

  try {

    console.log('source.txt was copied to destination.txt');
  } catch {
    console.error('The file could not be copied');
  }

  try {
    if (!existsSync(`${__dirname}files`) || existsSync(`${__dirname}files_copy`)) throw Error('FS operation failed');

    await mkdir(`${__dirname}files_copy`, { recursive: true });

    const files = await readdir(`${__dirname}files`);
    for (const file of files) {
      await copyFile(`${__dirname}files/${file}`, `${__dirname}files_copy/${file}`);
    }
  } catch (err) {
    console.error(err);
  }
};

await copy();
