import { access } from 'node:fs/promises';

export const isFileOrDirExists = async (pathname) => {
  try {
    await access(pathname);
    return true;
  } catch (error) {
    return false;
  }
}
