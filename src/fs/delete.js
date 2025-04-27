import { promises } from "fs";
import { join } from "path";

const remove = async () => {
  const filePath = join("src", "fs", "files", "fileToRemove.txt");
  try {
    await promises.access(filePath);
    await promises.unlink(filePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
