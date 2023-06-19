import { pipeline } from "stream/promises";
import { createWriteStream } from "fs";

const write = async () => {
  const writeStream = createWriteStream("./src/streams/files/fileToWrite.txt", { flags: "a" });
  await pipeline(process.stdin, writeStream);
};

await write();