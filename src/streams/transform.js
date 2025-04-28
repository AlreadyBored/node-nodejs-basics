import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      try {
        const reversed = chunk.toString().split("").reverse().join("");
        this.push(reversed);
        callback();
      } catch (err) {
        callback(err);
      }
    },
  });
  try {
    await pipeline(process.stdin, reverseTransform, process.stdout);
  } catch (err) {
    process.exit(1);
  }
};

await transform();
