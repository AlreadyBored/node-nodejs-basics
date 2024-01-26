import { unlink } from "node:fs/promises";

const __dirname = import.meta.dirname;

const remove = async () => {
  try {
    await unlink(__dirname + "/files/fileToRemove.txt");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await remove();
