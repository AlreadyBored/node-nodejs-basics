import { createWriteStream } from "node:fs";

const filePath = import.meta.dirname + "/files/fileToWrite.txt";

const write = async () => {
  const writeStream = createWriteStream(filePath);
  process.stdin.pipe(writeStream);
};

await write();
