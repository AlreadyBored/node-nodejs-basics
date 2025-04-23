import path from "path";
import fs from "fs/promises";
import { constants } from "fs";

const rename = async () => {
  const pathToFile = path.resolve("files", "wrongFilename.txt");
  const pathToNewFile = path.resolve("files", "properFilename.md");

  try {
    await fs.access(pathToFile, constants.F_OK);
  } catch (error) {
    console.error("FS operation failed");
    return;
  }

  try {
    await fs.access(pathToNewFile, constants.F_OK);
    console.error("FS operation failed");
  } catch {
    try {
      await fs.rename(pathToFile, pathToNewFile);
    } catch {
      console.error("FS operation failed");
    }
  }
};

await rename();
