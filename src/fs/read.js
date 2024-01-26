import { promises as fsPromises } from "node:fs";
import { resolve } from "node:path";

const filePath = resolve("src/fs/files/fileToread.txt");

const read = async () => {
  try {
    const contents = await fsPromises.readFile(filePath, { encoding: "utf8" });
    console.log(contents);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
