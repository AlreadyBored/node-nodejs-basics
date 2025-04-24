import fs from "node:fs/promises";
import path from "node:path";

const dirname = import.meta.dirname;

const remove = async () => {
  const filePath = path.join(dirname, "files", "fileToRemove.txt");

  try {
    await fs.unlink(filePath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();

