import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filesCopy = "files_copy";
  const sourcePath = path.join(__dirname, "files");
  const destPath = path.join(__dirname, filesCopy);

  try {
     await fs.promises.stat(sourcePath);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed!");
    } else {
      throw err;
    }
  }
  try {
    await fs.promises.stat(destPath);
    throw new Error("FS operation failed!");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.promises.mkdir(destPath);
      const files = await fs.promises.readdir(sourcePath);
      for (const file of files) {
        const sourceFile = path.join(sourcePath, file);
        const destinationFile = path.join(destPath, file);
        await fs.promises.copyFile(sourceFile, destinationFile);
        console.log(`${file} is copied!`);
      }
    } else {
      throw err;
    }
  }
};

await copy();
