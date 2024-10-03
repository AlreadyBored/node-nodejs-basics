import fs from "fs/promises";
import path from "path";

const folderPath = path.resolve("./src/fs/files");

const list = async () => {
  try {
    const files = await fs.readdir(folderPath);
    console.log(files);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await list();
