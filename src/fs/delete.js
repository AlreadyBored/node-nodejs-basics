import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files", "fileToRemove.txt");

export const remove = async () => {
  // Write your code here

  fs.rm(filePath, { recursive: true }, (error) => {
    if (error) {
      throw new Error("FS operation failed");
    }
  });
};

remove();
