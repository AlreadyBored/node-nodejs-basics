import { access, constants } from "node:fs/promises";

export const exists = async (pathname) => {
  try {
    await access(pathname, constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};
