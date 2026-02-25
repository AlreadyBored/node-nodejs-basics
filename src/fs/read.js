import { fileURLToPath } from "url";
import path from "path";
import { readFile } from "fs/promises";

const filePath = fileURLToPath(import.meta.url);
const dirname = path.dirname(filePath);

const read = async () => {
  const fileToRead = path.join(dirname, "files", "fileToRead.txt");

  try {
    const data = await readFile(fileToRead, "utf-8");
    console.log(data);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
