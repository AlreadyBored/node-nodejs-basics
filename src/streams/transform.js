import { Transform } from "stream";

const reverseText = new Transform({
  transform(chunk, _, callback) {
    this.push(chunk.toString().split("").reverse().join(""));
    callback();
  },
});

const transform = async () => {
  process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();
