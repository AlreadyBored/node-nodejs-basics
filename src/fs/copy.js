import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

export const copy = async () => {
  // Write your code here

  try {
    await fs.promises.access("files");
    await fs.promises.mkdir("files_copy");
  } catch {
    throw new Error("FS operation failed");
  }

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, "files");
  const copyFilePath = path.join(__dirname, "files_copy");

  fs.cp(filePath, copyFilePath, { recursive: true }, (error) => {
    if (error) {
      throw new Error("FS operation failed");
    }
  });
};

copy();
