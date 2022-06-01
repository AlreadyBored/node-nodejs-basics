import { readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files/");

  try {
    const fileNames = await readdir(filePath);
    console.log(fileNames);
  } catch {
    throw new Error("FS operation failed");
  }
};

list();
