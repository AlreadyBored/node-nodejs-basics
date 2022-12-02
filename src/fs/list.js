import { readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ErrorMessageFileExist = 'FS operation failed';

const list = async () => {
  const folderPath = join(__dirname, 'files');

  try {
    const files = await readdir(folderPath);
  } catch (error) {
    if (error.errno === -4058) {
      throw new Error(ErrorMessageFileExist);
    }
    throw error;
  }
};

await list();
