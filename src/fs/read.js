import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  try {
    const filePath = join(__dirname, "files", "fileToRead.txt");
    const content = await readFile(filePath, "utf8");
    console.log(content);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
