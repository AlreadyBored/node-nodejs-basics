import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

class ReverseTransform extends Transform {
  _transform(chunk, _, callback) {
    const reversedChunk = chunk.toString().split("").reverse().join("") + "\n";
    this.push(reversedChunk);
    callback();
  }
}

const transform = async () => {
  await pipeline(process.stdin, new ReverseTransform(), process.stdout);
};

await transform();
