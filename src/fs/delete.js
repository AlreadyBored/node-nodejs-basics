import fs from "fs/promises";
import path from "path";

const remove = async () => {
  const fileToRemove = path.join(process.cwd(), "files", "fileToRemove.txt");

  // at first, we need to check file exist or not
  const fileExists = await fs
    .access(fileToRemove)
    .then(() => true)
    .catch(() => false);
  if (!fileExists) {
    throw new Error("FS operation failed");
  }
  
  await fs.unlink(fileToRemove);
};

await remove();
