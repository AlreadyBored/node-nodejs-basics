import { pipeline } from "stream/promises";
import { Transform as transformStream } from "node:stream";

const transform = async () => {
  const reversed = new transformStream({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });
  await pipeline(process.stdin, reversed, process.stdout);
};

await transform();