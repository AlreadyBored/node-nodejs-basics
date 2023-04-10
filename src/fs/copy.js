import { promises as fs } from "fs";
import { join } from "path";

const copy = async () => {
  const filesFolder = join(".", "files");
  const filesCopyFolder = join(".", "files_copy");

  try {
    await fs.access(filesFolder);
  } catch (err) {
    throw new Error("FS operation failed: files folder does not exist");
  }

  try {
    await fs.access(filesCopyFolder);

    throw new Error("FS operation failed: files_copy folder already exists");
  } catch (err) {
    if (err.code !== "ENOENT") {
      throw err;
    }
    await fs.mkdir(filesCopyFolder);

    const fileNames = await fs.readdir(filesFolder);

    for (const fileName of fileNames) {
      const srcPath = join(filesFolder, fileName);
      const destPath = join(filesCopyFolder, fileName);
      const fileStat = await fs.stat(srcPath);

      if (fileStat.isDirectory()) {
        await copyFolder(srcPath, destPath);
      } else {
        await fs.copyFile(srcPath, destPath);
      }
    }
  }
};

await copy();
