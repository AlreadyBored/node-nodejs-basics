import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const remove = async () => {
  const delFile = path.join(__dirname, "files", "fileToRemove.txt");
  try {
    await fs.promises.rm(delFile);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
