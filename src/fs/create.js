import { appendFile, access, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ErrorMessageFileExist = 'FS operation failed';

const create = async () => {
  const fileData = 'I am fresh and young';
  const fileName = 'fresh.txt';
  const pathToFile = join(__dirname, 'files', fileName);

  try {
    const isFile = await stat(pathToFile);

    if (isFile) {
      throw new Error(ErrorMessageFileExist);
    }
  } catch (error) {
    if (error.message === ErrorMessageFileExist) {
      throw error;
    } else {
      await appendFile(pathToFile, fileData);
    }
  }
};

await create();
