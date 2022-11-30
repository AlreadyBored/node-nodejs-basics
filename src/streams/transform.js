import { createWriteStream } from "node:fs";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
  await pipeline(
    process.stdin,
    new Transform({
      decodeStrings: false,
      transform(chunk, encoding, callback) {
        const transformedChunk = chunk.reverse();
        callback(null, transformedChunk);
      },
    }),
    createWriteStream(new URL("./files/fileToWrite.txt", import.meta.url))
  );
};

await transform();
