import fs from "fs";
import { Transform } from "stream";

const transform = async () => {
  process.stdin.setEncoding("utf8");
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split("").reverse().join("");

      callback(null, reversed);
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
