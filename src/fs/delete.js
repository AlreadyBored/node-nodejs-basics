import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const remove = async () => {
  const scriptPath = fileURLToPath(import.meta.url);
  const dir = path.dirname(scriptPath);
  const filePath = path.join(dir, "files", "fileToRemove.txt");
  try {
    await fs.rm(filePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
