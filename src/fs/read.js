import { readFile } from "node:fs/promises";
import { join } from "node:path";

const dirname = import.meta.dirname;
const filePath = join(dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const content = await readFile(filePath, { encoding: "utf-8" });
    console.log(content);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
