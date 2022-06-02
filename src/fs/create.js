import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
  // Write your code here
  const textContent = "I am fresh and young";
  const filePath = path.join(__dirname, "files", "fresh.txt");
  fs.readFile(filePath, (err, data) => {
    if (data) {
      throw new Error("FS operation failed");
    }
  });
  fs.writeFile(filePath, textContent, (error) => {
    if (error) {
      throw new Error("FS operation failed");
    }
  });
};

create();
