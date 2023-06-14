import { isFileExists } from "./utils.js";
import { readFile } from "node:fs/promises";

const read = async () => {
  const src = "src/fs/files/fileToRead.txt";
  const options = { encoding: "utf8" };

  const exists = await isFileExists(src);
  if (!exists) {
    throw new Error("FS operation failed");
  }

  const content = await readFile(src, options);
  console.log(content);
};

await read();
