import { unlink } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ErrorMessageFileExist = 'FS operation failed';

const remove = async () => {
  const filePath = join(__dirname, 'files', 'fileToRemove.txt');
  try {
    await unlink(filePath);
  } catch (error) {
    if (error.errno === -4058) {
      throw new Error(ErrorMessageFileExist);
    }
    throw error;
  }
};

await remove();
