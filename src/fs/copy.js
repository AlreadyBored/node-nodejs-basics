import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import fs from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcFolder = join(__dirname, "files");
const finalFolder = join(__dirname, "files_copy");

const copyFolder = async (src, dest) => {
  const entries = await fs.readdir(src, { withFileTypes: true });
  await fs.mkdir(dest);

  for (let entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyFolder(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
};

const copy = async () => {
  try {
    const srcExsist = await fs
      .stat(srcFolder)
      .then(() => true)
      .catch(() => false);

    if (!srcExsist) {
      throw new Error("FS operation failed");
    }

    const destExists = await fs
      .stat(finalFolder)
      .then(() => true)
      .catch(() => false);

    if (destExists) {
      throw new Error("FS operation failed");
    }

    await copyFolder(srcFolder, finalFolder);
  } catch (error) {
    console.error(error.message);
  }
};

await copy();
