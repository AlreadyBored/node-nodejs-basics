import { rename as fsRename } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const rename = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const originalFilePath = path.join(__dirname, "files/wrongFilename.txt");
  const destinationFilePath = path.join(__dirname, "files/properFilename.md");

  try {
    await fsRename(originalFilePath, destinationFilePath);
    console.log("File renamed successfully!");
  } catch (err) {
    err.message = "FS operation failed";
    console.error(err);
  }
};

rename();
