import { cp } from "node:fs/promises";
import { join } from "node:path";

const dirname = import.meta.dirname;

const copy = async () => {
  const srcPath = join(dirname, "files");
  const dstPath = join(dirname, "files_copy");

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
