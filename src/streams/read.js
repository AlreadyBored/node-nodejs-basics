import { pipeline } from "node:stream/promises";
import { createReadStream } from "node:fs";

const read = async () => {
  await pipeline(createReadStream("./src/streams/files/fileToRead.txt"),process.stdout);
};

await read();