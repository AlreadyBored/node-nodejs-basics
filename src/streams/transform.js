import { Transform } from "node:stream";
const transform = async () => {
  // Write your code here
  const reverseStream = new Transform({
    transform(chunk, _, callback) {
      const reversed = chunk.toString().split("").reverse().join("");
      callback(null, reversed);
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
