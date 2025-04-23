import fs from "fs/promises";
import { constants } from "fs";
import path from "path";

const remove = async () => {
  const pathToRemoveFile = path.resolve("files", "fileToRemove.txt");

  try {
    await fs.access(pathToRemoveFile, constants.F_OK);
    await fs.unlink(pathToRemoveFile);
  } catch {
    console.error("FS operation failed");
  }
};

await remove();
