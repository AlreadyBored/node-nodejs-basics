import fs from "fs/promises";
import path from "path";

const remove = async () => {
  // Write your code here
  try {
    await fs.rm(path.resolve("./src/fs/files/fileToRemove.txt"));
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await remove();
