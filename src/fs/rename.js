import fs from "fs/promises";
import path from "path";

const rename = async () => {
  // Write your code here

  try {
    await fs.access(path.resolve("./src/fs/files/wrongFilename.txt"));
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }

  try {
    await fs.access(path.resolve("./src/fs/files/properFilename.md"));
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.rename(
        path.resolve("./src/fs/files/wrongFilename.txt"),
        path.resolve("./src/fs/files/properFilename.md")
      );
    } else {
      throw error;
    }
  }
};

await rename();
