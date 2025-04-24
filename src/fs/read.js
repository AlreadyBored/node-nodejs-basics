import fs from "node:fs/promises";
import path from "node:path";

const dirname = import.meta.dirname;
const filePath = path.join(dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const content = await fs.readFile(filePath, { encoding: "utf-8" });
    console.log(content);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();

