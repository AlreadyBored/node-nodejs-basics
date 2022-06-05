import { EOL } from "node:os";
import { Transform } from "node:stream";

export const transform = async () => {
  // Write your code here
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      try {
        const transformedChunk =
          chunk.toString().trim().split("").reverse().join("") + EOL;
        callback(null, transformedChunk);
      } catch (error) {
        callback(error);
      }
    },
  });
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
