import fs from "fs";
import path from "node:path";

const read = async () => {
  const filePath = path.join(import.meta.dirname + "/files/fileToRead.txt");
  try {
    const content = fs.readFileSync(filePath).toString();
    console.log(content);
  } catch (error) {
    throw Error("FS operation failed");
  }
};

await read();
