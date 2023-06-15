import { promises as fsPromises } from "fs";
import { dirname, join } from "path";

const copy = async () => {
  // Write your code here
  const currentDir = dirname(new URL(import.meta.url).pathname).replace(
    /^\/([A-Za-z]:)/,
    "$1"
  );
  const destinationDir = join(currentDir, "files_copy");
  const sourceDir = join(currentDir, "files");
  console.log(sourceDir);
  console.log(destinationDir);
  try {
    const sourceExists = await fsPromises.stat(sourceDir).catch(() => false);
    if (!sourceExists || !sourceExists.isDirectory()) {
      throw new Error("Fs operation failed");
    }

    const destinationDirExists = await fsPromises
      .stat(destinationDir)
      .catch(() => false);
    if (destinationDirExists && destinationDirExists.isDirectory()) {
      throw new Error("Fs operation failed");
    }

    await fsPromises.mkdir(destinationDir);

    const files = await fsPromises.readdir(sourceDir);
    for (let file of files) {
      const sourceFilePaht = join(sourceDir, file);
      const destionationFilePath = join(destinationDir, file);
      await fsPromises.copyFile(sourceFilePaht, destionationFilePath);
    }

    console.log("Folder files copied successfully to files_copy!");
  } catch (error) {
    console.error("Error", error.message);
  }
};

await copy();
