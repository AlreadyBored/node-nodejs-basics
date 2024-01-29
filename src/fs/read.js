import fs from "node:fs";
import { readFile } from "node:fs/promises";

const read = async () => {
  try {
    const readName = "./src/fs/files/fileToRead.txt";

    fs.accessSync(readName, fs.constants.F_OK);

    const file = await readFile(readName, "utf-8");

    console.log(file);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
