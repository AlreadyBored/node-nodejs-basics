import * as fs from "node:fs/promises";
import { constants } from "fs";

export const remove = async () => {
  try {
    await fs.access("./src/fs/files/fileToRemove.txt", constants.R_OK);
    await fs.rm("./src/fs/files/fileToRemove.txt");
  } catch (err) {
    if (err?.code == "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

remove();
