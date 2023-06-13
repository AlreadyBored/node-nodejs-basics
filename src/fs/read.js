import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const scriptPath = fileURLToPath(import.meta.url);
  const dir = path.dirname(scriptPath);
  const srcPath = path.join(dir, "files", "fileToRead.txt");
  try {
    const data = await fs.readFile(srcPath);
    console.log(data.toString());
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
