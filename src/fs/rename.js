import { rename as renameFile, access } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const filesDir = join(__dirname, "files", "wrongFilename.txt");
  const renameFilesDir = join(__dirname, "files", "properFilename.md");

  try {
    await access(filesDir);
  } catch (error) {
    throw new Error("FS operation failed");
  }

  try {
    await access(renameFilesDir);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw new Error("FS operation failed");
    }
    await renameFile(filesDir, renameFilesDir);
  }
};

await rename();
