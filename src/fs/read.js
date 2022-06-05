import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files", "fileToRead.txt");

export const read = async () => {
  // Write your code here

  fs.readFile(filePath, (error, data) => {
    if (error) {
      throw new Error("FS operation failed");
    } else {
      console.log(String(data));
    }
  });
};

read();
