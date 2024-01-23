import { promises as fsPromises } from "node:fs";
import { resolve } from "node:path";

const filePath = resolve("src/fs/files/fileToRemove.txt");
const errorMessage = "FS operation failed";

const remove = async () => {
  try {
    fsPromises.unlink(filePath);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await remove();
