import { mkdir, access, copyFile, readFile } from "node:fs/promises";
const filePath = new URL("./files/fileToRead.txt", import.meta.url);

const read = async () => {
  // Write your code here
  try {
    const contents = await readFile(filePath);
    console.log(`\u001B[35m${contents.toLocaleString()}\u001B[0m`);
  } catch (err) {
    throw Error(`\u001B[31mFS operation failed\u001B[0m ${err.message}`);
  }
};

await read();
