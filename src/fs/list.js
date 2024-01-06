import fs from "node:fs/promises";
import path from "node:path";

const list = async () => {
  const folderPath = path.join("src/fs/files");

  try {
    const files = await fs.readdir(folderPath);

    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
