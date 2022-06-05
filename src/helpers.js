import { access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname }  from 'path';

export const FS_ERROR_MESSAGE = 'FS operation failed';

export const isExist = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

export const getDirAndFilePath = (importMeta) => {
  const __filename = fileURLToPath(importMeta.url);
  const __dirname = dirname(__filename);

  return {
    __dirname,
    __filename
  };
};