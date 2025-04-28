import { existsSync } from "node:fs";
import path from "node:path";
import { readdir } from "node:fs/promises";

const list = async () => {
  const sourcePath = "./src/fs";
  if (!existsSync(sourcePath)) {
    throw new Error("FS operation failed");
  }

  try {
    const directoryPath = path.join(sourcePath, "files");
    const files = await readdir(directoryPath);
    console.log("Files in directory:", files);
  } catch (err) {
    console.error("Error reading directory:", err.message);
    throw err;
  }
};

await list();
