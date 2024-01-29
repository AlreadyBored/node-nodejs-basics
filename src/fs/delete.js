import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const remove = async () => {
  const filePath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToRemove.txt"
  );

  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed: fileToRemove.txt doesn't exists");
    }
    throw error;
  }
};

await remove();
