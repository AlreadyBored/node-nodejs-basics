import fs from "fs/promises";
import path from "path";

const list = async () => {
  const pathToFolder = path.resolve("files");

  try {
    await fs.stat(pathToFolder);
    const files = await fs.readdir(pathToFolder);
    console.log(files);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error("FS operation failed");
    } else {
      console.error(error);
    }
  }
};

await list();
