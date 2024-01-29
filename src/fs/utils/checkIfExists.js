import { FS_ERROR } from "../consts/index.js";
import fs from "fs/promises";
import { throwFSError } from "./throwFSError.js";

export async function checkIfExists(filePath) {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
