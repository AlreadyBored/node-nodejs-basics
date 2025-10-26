import path from "path";
import { stat } from "fs/promises";
import { fileURLToPath } from "url";

export const isExists = async (filePath) => {
  try {
    await stat(filePath);

    return true;
  } catch (error) {
    return false;
  }
};

export const getDirName = (url) => path.dirname(fileURLToPath(url));
