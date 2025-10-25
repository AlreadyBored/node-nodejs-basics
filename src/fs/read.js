import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
const read = async () => {
  try {
    const filePath = resolve("./fileToRead.txt");
    const contents = await readFile(filePath, { encoding: "utf8" });
    console.log(contents);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw err;
    }
  }
};

await read();
