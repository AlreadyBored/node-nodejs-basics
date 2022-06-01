import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files/fileToRead.txt");

  try {
    const content = await readFile(filePath);
    console.log(content.toString());
  } catch {
    throw new Error("FS operation failed");
  }
};

read();
