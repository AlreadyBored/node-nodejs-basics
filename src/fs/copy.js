// implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copyDirectory = async (src, dest) => {
  await fs.mkdir(dest, { recursive: true });
  let entries = await fs.readdir(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    entry.isDirectory()
      ? await copyDirectory(srcPath, destPath)
      : await fs.copyFile(srcPath, destPath);
  }
};

const copy = async () => {
  const srcDir = path.join(__dirname, "files");
  const destDir = path.join(__dirname, "files_copy");

  try {
    // Check if source directory exists
    await fs.access(srcDir);

    // Check if destination directory already exists
    try {
      await fs.access(destDir);
      throw new Error("FS operation failed");
    } catch (error) {
      if (error.code === "ENOENT") {
        // Only if files_copy does not exist, proceed to copy
        await copyDirectory(srcDir, destDir);
      } else {
        throw error;
      }
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
