import { promises } from "fs";
import { join } from "path";

const rename = async () => {
  const folderPath = join("src", "fs", "files");
  const oldPath = join(folderPath, "wrongFilename.txt");
  const newPath = join(folderPath, "properFilename.md");
  const fsError = new Error("FS operation failed");

  try {
    await promises.access(oldPath);
    try {
      await promises.access(newPath);
      throw fsError;
    } catch {
      try {
        await promises.rename(oldPath, newPath);
      } catch {
        throw fsError;
      }
    }
  } catch {
    throw fsError;
  }
};

await rename();
