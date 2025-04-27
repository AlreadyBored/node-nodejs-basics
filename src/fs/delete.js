import { unlink } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  try {
    const filePath = join(__dirname, "files", "fileToRemove.txt");
    await unlink(filePath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
