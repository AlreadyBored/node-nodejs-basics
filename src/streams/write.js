import { createWriteStream } from "fs";

const write = async () => {
  const fileToWrite = "./src/streams/files/fileToWrite.txt";
  const stream = createWriteStream(fileToWrite);
  process.stdin.pipe(stream);
};

await write();
