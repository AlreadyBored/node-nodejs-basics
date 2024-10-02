import { promises as fs } from "fs";
import path from "path";
const __dirname = path.resolve();
const copy = async () => {
  // Write your code here
  const mainFile = path.join(__dirname, "files");
  const copyFile = path.join(__dirname, "files_copy");
  console.log(mainFile);

  try {
    await fs.access(mainFile);
  } catch (error) {
    throw new Error("FS operation failed");
  }
  try {
    await fs.access(copyFile);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw new Error("FS operation failed");
    }
  }

  await fs.mkdir(copyFile);
  const files = await fs.readdir(mainFile);
  console.log(files);

  files.map(async (file) => {
    const srcFile = path.join(mainFile, file);
    const destFile = path.join(copyFile, file);
    await fs.copyFile(srcFile, destFile);
  }, console.log("Files copied successfully!"));
};

await copy();
