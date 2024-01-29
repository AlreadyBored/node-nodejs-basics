import fs from "node:fs";
import process from "node:process";

const sourcePath = "src/streams/files/fileToWrite.txt";

// use ctrl+D to exit stdin
const write = async () => {
  const file = fs.createWriteStream(sourcePath);
  process.stdin.pipe(file);
};

await write();
