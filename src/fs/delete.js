import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("./src/fs/files/fileToRemove.txt");

const remove = async () => {
  try {
    await fs.rm(filePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await remove();
