import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
  try {
    const ws = process.stdout;
    const rs = process.stdin;
    const transform = new Transform({
      transform(chunk, encoding, callback) {
        const stringifiedChunk = chunk.toString().trim();
        const reversedChunk =
          stringifiedChunk.split("").reverse().join("") + "\n";
        callback(null, reversedChunk);
      },
    });

    await pipeline(rs, transform, ws);
  } catch (error) {
    console.log(error);
  }
};

await transform();
