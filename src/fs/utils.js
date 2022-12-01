import { stat } from "node:fs/promises";

export const checkFileExist = async (path) => {
  try {
    const data = await stat(path);
    return Boolean(data);
  } catch (error) {
    return false;
  }
};
