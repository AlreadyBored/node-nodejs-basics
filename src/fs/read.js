import { readFile } from "node:fs/promises";

const __dirname = import.meta.dirname;

const read = async () => {
  try {
    console.log(
      await readFile(__dirname + "/files/fileToRead.txt", { encoding: "utf8" })
    );
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await read();
