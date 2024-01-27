import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { access, rename as renameFile } from "fs/promises";

const pathToWrongFile = join(dirname(fileURLToPath(import.meta.url)), "files", "wrongFilename.txt");
const pathToTargetFile = join(dirname(fileURLToPath(import.meta.url)), "files", "properFilename.md");

const rename = async () => {
  try {
    await access(pathToWrongFile);
    await renameFile(pathToWrongFile, pathToTargetFile);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
