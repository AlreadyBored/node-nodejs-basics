import { access } from 'node:fs/promises';

export const checkIfFileExist = async (url, constant) => {
  try {
    await access(url, constant);
    return true;
  } catch {
    return false;
  }
};
