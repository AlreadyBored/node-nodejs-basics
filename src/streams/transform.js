import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";


const transform = async () => {
  // Write your code here
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString().split("").reverse().join("");
      this.push(`${data}\n`);
      callback();
    },
  });

  await pipeline(process.stdin, transform , process.stdout);
};

await transform();
