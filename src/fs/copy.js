import { promises as fsPromises } from "node:fs";
import { resolve, join } from "node:path";

const sourcePath = resolve("src/fs/files");
const destinationPath = resolve("src/fs/copy_files");
const errorMessage = "FS operation failed";

const copy = async () => {
  try {
    await fsPromises.mkdir(destinationPath, { recursive: true });
    const files = await fsPromises.readdir(sourcePath);
    await Promise.all(
      files.map(async (file) => {
        const sourceFile = join(sourcePath, file);
        const destinationFile = join(destinationPath, file);
        await fsPromises.copyFile(sourceFile, destinationFile);
      })
    );
    console.log("Files copied successfully!");
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await copy();
