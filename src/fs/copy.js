import { promises as fs } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_DIR = join(__dirname, "files");
const DEST_DIR = join(__dirname, "files_copy");

const handleError = (err, srcDir) => {
  if (err.code === "ENOENT") {
    if (err.path === srcDir) {
      throw new Error("FS operation failed");
    }
  } else {
    throw err;
  }
};

const copyDir = async (src, dest) => {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
};

const copy = async () => {
  try {
    await fs.access(SRC_DIR);
    await fs.access(DEST_DIR);
    throw new Error("FS operation failed");
  } catch (err) {
    handleError(err, SRC_DIR);
    await copyDir(SRC_DIR, DEST_DIR);
  }
};

await copy();
