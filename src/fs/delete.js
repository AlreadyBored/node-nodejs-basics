import * as fs from "node:fs/promises";
import { constants } from "fs";

export const remove = async () => {
  try {
    await fs.access("./files/fileToRemove.txt", constants.R_OK);
    await fs.rm("./files/fileToRemove.txt");
  } catch (err) {
    if (err?.code == "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};
