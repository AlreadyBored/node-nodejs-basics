import { rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const remove = async () => {
  try {
    await rm(`${dirName}/files/fileToRemove.txt`);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();