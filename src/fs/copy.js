import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.join(__dirname, "files");
const destPath = path.join(__dirname, "files_copy");

const copyDirectory = async (src, dest) => {
  const entries = await fs.readdir(src, { withFileTypes: true });

  await fs.mkdir(dest);

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
};

const copy = async () => {
  try {
    await fs.access(srcPath);
    await fs.access(destPath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      if (err.path === srcPath) {
        throw new Error("FS operation failed");
      }
      await copyDirectory(srcPath, destPath);
    } else {
      throw err;
    }
  }
};

await copy();
