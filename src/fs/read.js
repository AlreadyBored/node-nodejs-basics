import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const read = async () => {
  try {
    console.log(
      await readFile(`${dirName}/files/fileToRead.txt`, { encoding: "utf8" })
    );
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
