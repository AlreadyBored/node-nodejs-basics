import { stat } from "fs/promises";

export const isFileExist = async (path) => {
  try {
    const pathStats = await stat(path);
    if (pathStats.isFile()) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export const isFolderExist = async (path) => {
  try {
    const pathStats = await stat(path);
    if (pathStats.isDirectory()) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};
