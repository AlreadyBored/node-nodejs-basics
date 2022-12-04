import fs from "node:fs/promises";
import path from "node:path";

// read.js - implement function that prints content of the fileToRead.txt
// into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)

const read = async () => {
  // Write your code here

  try {
    const data = await fs.readFile(
      path.resolve(process.cwd(), "src", "fs", "files", "fileToRead.txt"),
      "utf-8"
    );

    console.log(data);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
