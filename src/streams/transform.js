import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const reverseString = (str) => str.split("").reverse().join("");
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, reverseString(chunk.toString()));
    },
  });

  await pipeline(process.stdin, transform, process.stdout);
};

await transform();
