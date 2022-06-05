import * as fs from "node:fs/promises";
import { constants } from "fs";

export const rename = async () => {
  let oldFile, newFile;
  try {
    oldFile = await fs.access(
      "./src/fs/files/wrongFilename.txt",
      constants.R_OK
    );

    console.log(oldFile);
    newFile = await fs.access(
      "./src/fs/files/properFilename.md",
      constants.R_OK
    );
    console.log(newFile);
    throw new Error("FS operation failed");
  } catch (err) {
    console.log(err.code);
    if (err?.code === "ENOENT" && oldFile === undefined) {
      fs.rename(
        "./src/fs/files/wrongFilename.txt",
        "./src/fs/files/properFilename.md"
      );
    } else if (err.message === "FS operation failed" || err?.code == "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};
rename();
