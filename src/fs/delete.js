import { rm } from "node:fs/promises"
import path from "path"

const remove = async () => {
  try {
    await rm(path.resolve("./files/fileToRemove.txt"))
  } catch {
    console.log("FS operation failed")
  }
};

await remove();
