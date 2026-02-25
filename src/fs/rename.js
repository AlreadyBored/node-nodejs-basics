import { fileURLToPath } from "node:url";
import path from "path";
import { rename as fileRename } from "node:fs/promises";

const filePath = fileURLToPath(import.meta.url);
const dirname = path.dirname(filePath);

const rename = async () => {
  const oldPath = path.join(dirname, "files", "wrongFilename.txt");
  const newPath = path.join(dirname, "files", "properFilename.md");

  try {
    await fileRename(oldPath, newPath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
