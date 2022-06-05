import { readdir, mkdir, copyFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const copy = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, "files/");
  const destinationFolderPath = path.join(__dirname, "files_copy/");

  try {
    const fileNames = await readdir(folderPath);
    await mkdir(destinationFolderPath);

    fileNames.map(async (fileName) => {
      const filePath = path.join(folderPath, fileName);
      const destinationPath = path.join(destinationFolderPath, fileName);
      await copyFile(filePath, destinationPath);
    });
    console.log("Folder copied successfully!");
  } catch (err) {
    err.message = "FS operation failed";
    console.error(err);
  }
};

copy();
