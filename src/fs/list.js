import { readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const folderPath = path.join(__dirname, "files/");

  try {
    const fileNames = await readdir(folderPath);
    console.log(fileNames);
  } catch (err) {
    err.message = "FS operation failed";
    console.error(err);
  }
};

list();
