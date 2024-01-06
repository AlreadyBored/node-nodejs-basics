import fs from "node:fs/promises";
import path from "node:path";

const read = async () => {
  const pathToFile = path.join("src/fs/files/fileToRead.txt");

  try {
    const content = await fs.readFile(pathToFile, { encoding: 'utf8' });
    console.log(content);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
