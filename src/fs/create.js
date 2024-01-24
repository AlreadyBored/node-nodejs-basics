import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { writeFile, access } from 'fs/promises';

const pathExists = (path) => {
  return access(path)
    .then(() => true)
    .catch(() => false);
};

const create = async () => {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const filePath = join(currentDir, 'files', 'fresh.txt');

  const fileExists = await pathExists(filePath);

  if (fileExists) throw new Error('FS operation failed');

  try {
    await writeFile(filePath, 'I am fresh and young');
    console.log('The file has been successfully written');
  } catch (error) {
    console.error('Error writing the file:', error.message);
  }
};

await create();
