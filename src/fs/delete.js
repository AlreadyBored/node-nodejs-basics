import { unlink } from "node:fs/promises";
import { join } from "node:path";

const dirname = import.meta.dirname;

const remove = async () => {
  const filePath = join(dirname, "files", "fileToRemove.txt");

  try {
    await unlink(filePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
