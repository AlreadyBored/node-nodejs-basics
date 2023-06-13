import { readdir, copyFile, access, mkdir } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const filesDir = join(__dirname, "files");
  const copyFilesDir = join(__dirname, "files_copy");

  try {
    await access(filesDir);
  } catch (error) {
    throw new Error("FS operation failed");
  }

  try {
    await access(copyFilesDir);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw new Error("FS operation failed");
    }
    await mkdir(copyFilesDir);
  }

  try {
    const files = await readdir(filesDir);

    for (const file of files) {
      const inFilesDir = join(filesDir, file);
      const inCopyFilesDir = join(copyFilesDir, file);
      await copyFile(inFilesDir, inCopyFilesDir);
    }
  } catch (error) {
    console.error(error);
    throw new Error("FS operation failed");
  }
};

await copy();
