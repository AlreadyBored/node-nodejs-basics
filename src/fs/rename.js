import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files", "wrongFilename.txt");
const copyFilePath = path.join(__dirname, "files", "properFilename.md");

export const rename = async () => {
  // Write your code here

  fs.rename(filePath, copyFilePath, (error) => {
    if (error) {
      throw new Error("FS operation failed");
    }
  });
};

rename();
