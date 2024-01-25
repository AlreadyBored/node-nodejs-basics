import fs from "fs/promises";
import path from "path";

const targetFile = "fileToRemove.txt";
const sourceFolder = "files";
const pathTotTargetFile = path.join(process.cwd(), sourceFolder, targetFile);

const remove = async () => {
  try {
    await fs.unlink(pathTotTargetFile);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
