import fs from "fs/promises";
import path from "path";

const list = async () => {
  // Write your code here
  try {
    const dirName = path.resolve("./src/fs/files");
    await fs.access(dirName);

    const files = await fs.readdir(dirName);

    files.forEach((fileName) => {
      console.log(fileName);
    });
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await list();
