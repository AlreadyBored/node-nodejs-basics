import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const remove = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const deleteFile = path.join(__dirname, "files", "fileToRemove.txt");
  // Write your code here
  try {
    await fs.access(deleteFile, fs.constants.F_OK);
    await fs.rm(deleteFile);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
