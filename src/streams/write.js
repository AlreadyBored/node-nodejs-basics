import fs from "fs";
import process from "process";

const write = async () => {
  const writable = fs.createWriteStream("./src/streams/files/fileToWrite.txt");

  process.stdin.pipe(writable);
};

await write();
