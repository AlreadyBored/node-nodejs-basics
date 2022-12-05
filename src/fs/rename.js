import fsPromises from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const oldPath = path.join(__dirname, "files", "wrongFilename.txt");
const newPath = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    await fsPromises.access(newPath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.message === "FS operation failed") {
      throw err;
    }
  }

  try {
    await fsPromises.rename(oldPath, newPath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
