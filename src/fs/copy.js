import { cp } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  try {
    const sourceDir = join(__dirname, "files");
    const targetDir = join(__dirname, "files_copy");

    await cp(sourceDir, targetDir, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
