// list.js
import fs from "fs/promises";
import path from "path";

const list = async () => {
  const folderPath = path.join("files");

  try {
    await fs.access(folderPath);
  } catch {
    throw new Error("FS operation failed");
  }

  try {
    const files = await fs.readdir(folderPath);
    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
