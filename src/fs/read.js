import { existsSync } from "node:fs";
import path from "node:path";
import { readdir, readFile } from "node:fs/promises";

const read = async () => {
  const sourcePath = "./src/fs/files/fileToRead.txt";
  if (!existsSync(sourcePath)) {
    throw new Error("FS operation failed");
  }
  try {
    const directoryPath = path.join(sourcePath);
    const fileContent = await readFile(directoryPath, "utf-8");
    console.log("fileContent:", fileContent);
  } catch (err) {
    console.error("Error reading directory:", err.message);
    throw err;
  }
};

await read();
