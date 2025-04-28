import { cp } from "node:fs/promises";
import { join } from "node:path";

const dirname = import.meta.dirname;
const srcPath = join(dirname, "files");
const dstPath = join(dirname, "files_copy");

const copy = async () => {
  try {
    await cp(srcPath, dstPath, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
