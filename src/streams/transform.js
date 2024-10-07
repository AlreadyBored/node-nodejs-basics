import { Transform } from "node:stream";
const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split("").reverse().join("") + "\n");
      callback();
    },
  });
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
