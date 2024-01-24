import { readFile } from "node:fs/promises";

const read = async () => {
  try {
    console.log(
      await readFile("./src/fs/files/fileToRead.txt", { encoding: "utf8" })
    );
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await read();
