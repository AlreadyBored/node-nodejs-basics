import fs from "node:fs/promises";
import path from "node:path";

const __dirname = import.meta.dirname;

const copy = async () => {
  const sourceDir = path.join(__dirname, "files");
  const destDir = path.join(__dirname, "files_copy");

  try {
    await fs.cp(sourceDir, destDir, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();

