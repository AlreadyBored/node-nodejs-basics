import { access, constants } from "node:fs/promises";

/** checks if given file exists */
export const isFileExists = async (filepath) => {
  try {
    await access(filepath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};
