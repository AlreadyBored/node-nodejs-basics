import fs from "fs/promises";
import path from "path";

const rename = async () => {
  const oldPath = path.join("files", "wrongFilename.txt");
  const newPath = path.join("files", "properFilename.md");

  try {
    await fs.rename(oldPath, newPath);
    console.log("File renamed successfully");
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
