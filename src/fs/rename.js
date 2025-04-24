import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const oldFile = path.join(__dirname, "files", "wrongFilename.txt");
  const newFile = path.join(__dirname, "files", "properFilename.md");
  try {
    await fs.promises.access(oldFile);
    try {
      await fs.promises.access(newFile);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw new Error("FS operation failed");
      }
    }
    await fs.promises.rename(oldFile, newFile);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
