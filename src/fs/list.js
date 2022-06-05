import { readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const list = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
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
