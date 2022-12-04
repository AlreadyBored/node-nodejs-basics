import { readFile } from "node:fs/promises"
import path from "path"

const read = async () => {
  try {
    console.log(
      await readFile(path.resolve("./files/fileToRead.txt"), { encoding: "utf8" })
    )
  } catch {
    console.log("FS operation failed")
  }
};

await read();
