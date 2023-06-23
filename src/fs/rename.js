import fs from "fs/promises";
import path from "path";

const pathSrc = path.resolve("src", "fs", "files", "wrongFilename.txt");
const pathDst = path.resolve("src", "fs", "files", "properFilename.md");

const rename = async () => {
  // Write your code here
  try {  
    fs.rename(pathSrc, pathDst);
  }
  catch {
    throw new Error('FS operation failed');
  }
};

await rename();
