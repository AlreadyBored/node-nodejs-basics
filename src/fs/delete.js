import { rm } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files/fileToRemove.txt");

  try {
    await rm(filePath);
    console.log("File removed successfully!");
  } catch (err) {
    err.message = "FS operation failed";
    console.error(err);
  }
};

remove();
