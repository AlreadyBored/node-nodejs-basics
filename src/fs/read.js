import fs from "fs/promises";
import path from "path";

const pathToFile = path.resolve("src", "fs", "files", "fileToRead.txt");
const read = async () => {
  // Write your code here
  try {
    const content = await fs.readFile(pathToFile, {encoding: 'utf-8'});
    console.log(content);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
