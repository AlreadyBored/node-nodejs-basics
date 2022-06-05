import { Transform } from "stream";
import process from "process";

export const transform = async () => {
  // Write your code here

  const tr = new Transform({
    transform(chunk, _, callback) {
      const reversedChunk = chunk.toString().split("").reverse().join("");

      this.push(reversedChunk);

      callback();
    },
  });

  process.stdin.pipe(tr).pipe(process.stdout);
};

transform();
