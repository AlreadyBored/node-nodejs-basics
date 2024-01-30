import { writeFile, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const currentDir = dirname(currentFilePath);
const filePath = join(currentDir, 'files', 'fresh.txt');

const create = async () => {
  try {
    await access(filePath);

    throw new Error('FS operation failed: File already exists');
  } catch (error) {
    if (error.code === 'ENOENT') {
      const content = 'I am fresh and young';

      await writeFile(filePath, content);

      console.log(`File fresh.txt created successfully.`);
    } else {
     
      throw error;
    }
  }
};

await create();
