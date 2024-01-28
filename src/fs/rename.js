// implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const srcPath = path.join(__dirname, "files", "wrongFilename.txt");
  const destPath = path.join(__dirname, "files", "properFilename.md");

  try {
    // Check if the source file exists
    await fs.access(srcPath);

    try {
      // Check if the destination file already exists
      await fs.access(destPath);
      throw new Error("FS operation failed");
    } catch (error) {
      if (error.code === "ENOENT") {
        // If the destination file does not exist, perform the rename
        await fs.rename(srcPath, destPath);
      } else {
        // If the error is of another kind, rethrow it
        throw error;
      }
    }
  } catch (error) {
    // If the source file does not exist, throw an error
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      // If the error is of another kind, rethrow it
      throw error;
    }
  }
};

await rename();
