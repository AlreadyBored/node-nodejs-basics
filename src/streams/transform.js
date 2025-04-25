import { pipeline } from "stream/promises";
import { stdin, stdout } from "process";
import { Transform } from "stream";

const transform = async () => {
  // Write your code here
  const transformStream = new Transform({
    transform(chunk, _, callback) {
      const reversedText = String(chunk).split("").reverse().join("");
      callback(null, reversedText);
    },
  });

  await pipeline(stdin, transformStream, stdout);
};

await transform();
