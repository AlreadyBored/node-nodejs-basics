import { pipeline } from "stream/promises";
import { Transform } from "node:stream";

const read = process.stdin;
const write = process.stdout;

const myTransform = new Transform({
  transform(chunk, _, cb) {
    const result = chunk.toString().trim().split("").reverse().join("");
    this.push(result + "\n");
    cb();
  },
});

const transform = async () => {
  try {
    await pipeline(read, myTransform, write);
  } catch (error) {
    console.log(error);
  }
};

await transform();
