import fs from "node:fs/promises";
import path from "node:path";

const remove = async () => {
  const fileName = "fileToRemove.txt";
  const filePath = path.join("src/fs/files");

  try {
    await fs.unlink(`${filePath}/${fileName}`);
    console.log("File removed successful!");
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
