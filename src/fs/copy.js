import { cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorMessage = 'FS operation failed';

const copy = async () => {
  const targetDirPath = `${__dirname}/files_copy`;
  const fromDirPath = `${__dirname}/files`;
  const copyOptions = {
    recursive: true,
    force: false,
    errorOnExist: true,
  };
  try {
    await cp(fromDirPath, targetDirPath, copyOptions);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await copy();
