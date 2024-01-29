import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { exists } from "./vendors.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DIR = "files";

const copy = async () => {
  const sourceDir = path.join(__dirname, DIR);
  const destDir = path.join(__dirname, "files_copy");

  if (!(await exists(sourceDir)) || (await exists(destDir))) {
    throw new Error("FS operation failed");
  }

  copyFiles(sourceDir, destDir);
};

const copyFiles = async (src, dest) => {
  await fs.mkdir(dest, { recursive: true });

  const entries = await fs.readdir(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    entry.isDirectory()
      ? copyDirectory(srcPath, destPath)
      : await fs.copyFile(srcPath, destPath);
  }
};

await copy();
