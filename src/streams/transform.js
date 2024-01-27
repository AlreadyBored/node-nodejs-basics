import { Transform } from "stream";
import process from "process";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, _encoding, callback) {
      this.push(chunk.toString().split("").reverse().join(""));
      callback();
    },
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
