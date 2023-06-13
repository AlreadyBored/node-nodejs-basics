import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

class ReverseTransform extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    const reverse = chunk.toString().trim().split("").reverse();

    this.push(`${reverse.join("")}\n`);
    callback();
  }
}

const transform = async () => {
  const transformStream = new ReverseTransform();
  await pipeline(process.stdin, transformStream, process.stdout);
  // by default stdin is suspended
  process.stdin.resume();
};

await transform();
