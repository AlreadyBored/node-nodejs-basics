import fs from "fs";
import path from "node:path";
const write = async () => {
  const filePath = path.join(import.meta.dirname + "/files/fileToWrite.txt");
  const writableStream = fs.createWriteStream(filePath);

  process.stdin.on("data", (chunk) => {
    writableStream.write(chunk);
  });
};

await write();
