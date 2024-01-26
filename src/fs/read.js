import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFile, access } from 'fs/promises';

const pathExists = (path) => {
  return access(path)
    .then(() => true)
    .catch(() => false);
};

const read = async () => {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const targetDir = join(currentDir, 'files');
  const filePath = join(targetDir, 'fileToRead.txt');

  const fileExists = pathExists(filePath);

  if (!fileExists) throw new Error('FS operation failed');

  try {
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error('Error reading the file:', err.message);
  }
};

await read();
