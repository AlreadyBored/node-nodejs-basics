import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { stat } from 'fs/promises';

// const __filename = fileURLToPath(import.meta.url);
// export const __dirname = dirname(__filename);
export const customError = 'FS operation failed';

export const getPath = (url, fileName = '', folderName = 'files') => {
    const __filename = fileURLToPath(url);
    const __dirname = dirname(__filename);
    const filePath = fileName ? join(__dirname, folderName, fileName) : join(__dirname, folderName);


    return filePath;
};

export const isFileExists = async (url) => {
  try {
    await stat(url);

    return true;
  } catch {
    return false;
  }
};
