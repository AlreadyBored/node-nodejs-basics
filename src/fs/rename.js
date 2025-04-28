import { rename as renameFile } from "node:fs/promises";
import { join } from "node:path";

const dirname = import.meta.dirname;
const oldPath = join(dirname, "files", "wrongFileName.txt");
const newPath = join(dirname, "files", "properFileName.md");

const rename = async () => {
  try {
    await renameFile(oldPath, newPath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
