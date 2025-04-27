import { rm } from "node:fs/promises";

const remove = async () => {
  const deleteTarget = "./src/fs/files/fileToRemove.txt";

  try {
    await rm(deleteTarget);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
