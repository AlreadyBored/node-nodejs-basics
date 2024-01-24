import { unlink } from "node:fs/promises";

const remove = async () => {
  try {
    await unlink("./src/fs/files/fileToRemove.txt");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await remove();
