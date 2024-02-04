import fs from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const read = async () => {
  // Write your code here
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(__dirname, "files");
    const fileToReadPath = path.join(folderPath, "fileToRead.txt");
    const fileContent = await fs.readFile(fileToReadPath, "utf8");
    console.log(fileContent);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await read();
