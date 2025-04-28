import { promises as fs } from "fs";

const list = async () => {
  try {
    const files = await fs.readdir("src/fs/files");
    console.log(files);
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "ENOTDIR") {
      throw new Error("FS operation failed");
    }
    throw error;
  }
};

await list();
