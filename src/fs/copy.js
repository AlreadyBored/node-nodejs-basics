import { promises } from "fs";
import { join } from "path";

const copy = async () => {
  const srcFolder = join("src", "fs", "files");
  const destFolder = join("src", "fs", "files_copy");
  const fsError = new Error("FS operation failed");

  try {
    await promises.access(srcFolder);
    try {
      await promises.access(destFolder);
      throw fsError;
    } catch {
      try {
        await promises.mkdir(destFolder);
        const files = await promises.readdir(srcFolder);
        for (const file of files) {
          const srcFile = join(srcFolder, file);
          const destFile = join(destFolder, file);
          await promises.copyFile(srcFile, destFile);
        }
      } catch {
        throw fsError;
      }
    }
  } catch {
    throw fsError;
  }
};

await copy();
