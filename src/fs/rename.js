import * as fs from "node:fs/promises";
import { constants } from "fs";

export const rename = async () => {
  let oldFile, newFile;
  try {
    oldFile = await fs.access("./files/wrongFilename.txt", constants.R_OK);

    newFile = await fs.access("./files/properFilename.md", constants.R_OK);

    throw new Error("FS operation failed");
  } catch (err) {
    if (err?.code === "ENOENT" && !oldFile) {
      fs.rename("./files/wrongFilename.txt", "./files/properFilename.md");
    } else if (err.message === "FS operation failed" || err?.code == "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};
