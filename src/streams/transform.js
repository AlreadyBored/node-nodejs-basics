import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split("").reverse().join("");
      callback(null, reversed);
    },
  });

  await pipeline(process.stdin, reverseTransform, process.stdout);
};

await transform();
