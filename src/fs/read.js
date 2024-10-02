import { promises as fs } from "fs";
import path from "path";
const __dirname = path.resolve();

const read = async () => {
  // Write your code here
  const file = path.join(__dirname, "files", "fileToRead.txt");
  try {
    await fs.access(file);
  } catch (error) {
    throw new Error("FS operation failed");
  }
  try {
    const filesContent = await fs.readFile(file, "utf-8");
    console.log(filesContent);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
