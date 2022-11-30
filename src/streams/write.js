import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

const write = async () => {
  await pipeline(
    process.stdin,
    createWriteStream(new URL("./files/fileToWrite.txt", import.meta.url))
  );
};

await write();
