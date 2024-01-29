import { promises } from 'node:fs';

const { access } = promises;

export const checkFileExists = async (filePath) => {
  try {
    await access(filePath);
    return true;
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false;
    } else {
      throw err;
    }
  }
};
