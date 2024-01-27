import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { access, rm } from "fs/promises";

const pathToFile = join(dirname(fileURLToPath(import.meta.url)), "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await access(pathToFile);
    await rm(pathToFile);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
