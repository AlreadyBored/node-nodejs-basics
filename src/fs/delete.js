import { unlink } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "path";

const remove = async () => {
  const filePath = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filePath);
  const targetFile = path.join(dirname, "files", "fileToRemove.txt");

  try {
    await unlink(targetFile);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
