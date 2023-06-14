import { existsSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const filePath = join(__dirname, 'files', 'fresh.txt');

  try {
    const isFileExist = existsSync(filePath);
    if (isFileExist) {
      throw new Error('FS operation failed');
    }

    writeFileSync(filePath, 'I am fresh and young');
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await create();
