import { promises } from "fs";
import { join } from "path";

const list = async () => {
  const folderPath = join("src", "fs", "files");
  try {
    const files = await promises.readdir(folderPath);
    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
