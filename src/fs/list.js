import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files");

export const list = async () => {
  // Write your code here

  fs.readdir(filePath, (error, files) => {
    if (error) {
      throw new Error("FS operation failed");
    } else {
      console.log(files);
    }
  });
};

list();
