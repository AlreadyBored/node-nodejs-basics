import fs from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ErrorMessageFileExist = 'FS operation failed';

const rename = async () => {
  const oldPathFile = join(__dirname, 'files', 'wrongFilename.txt');
  const newPathFile = join(__dirname, 'files', 'properFilename.md');

  try {
    const isNotNewFile = await fs.stat(newPathFile);
    if (isNotNewFile) {
      throw new Error(ErrorMessageFileExist);
    }
  } catch (error) {
    if (error.errno !== -4058) {
      throw error;
    }
  }

  try {
    await fs.rename(oldPathFile, newPathFile);
  } catch (error) {
    if (error.errno === -4058) {
      throw new Error(ErrorMessageFileExist);
    }

    throw error;
  }
};

await rename();
