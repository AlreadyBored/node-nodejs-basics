import fs from "fs/promises";
import path from "path";

const copy = async () => {
  const pathToFiles = path.resolve("files");
  const pathToFileCopy = path.resolve("files_copy");

  try {
    await fs.stat(pathToFiles);
  } catch {
    console.error("FS operation failed");
    return;
  }

  try {
    await fs.stat(pathToFileCopy);
    console.error("FS operation failed");
    return;
  } catch (err) {
    if (err.code !== "ENOENT") {
      console.error("FS operation failed");
      return;
    }
  }

  try {
    await fs.mkdir(pathToFileCopy);

    const files = await fs.readdir(pathToFiles);

    for (const file of files) {
      const srcFile = path.join(pathToFiles, file);
      const srcFileCopy = path.join(pathToFileCopy, file);
      const statFile = await fs.stat(srcFile);

      if (statFile.isFile()) {
        await fs.copyFile(srcFile, srcFileCopy);
      }
    }
  } catch (err) {
    console.error("FS operation failed");
  }
};

await copy();
