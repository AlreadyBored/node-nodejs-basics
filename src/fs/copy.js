import { cp } from "node:fs/promises";

const copy = async () => {
  const copyFromDest = "./src/fs/files";
  const copyToDest = "./src/fs/files_copy";
  try {
    await cp(copyFromDest, copyToDest, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
