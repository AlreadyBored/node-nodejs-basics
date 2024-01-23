import { promises as fsPromises } from "node:fs";
import { resolve } from "node:path";

const oldName = resolve("src/fs/files/wrongFilename.txt");
const newName = resolve("src/fs/files/properFilename.md");
const errorMessage = "FS operation failed";

const rename = async () => {
  try {
    await fsPromises.rename(oldName, newName);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await rename();
