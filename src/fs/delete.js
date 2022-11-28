import { rm } from "node:fs/promises";

const remove = async () => {
  try {
    const filePath = new URL("./files/fileToRemove.txt", import.meta.url);
    await rm(filePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
