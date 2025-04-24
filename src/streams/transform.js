import { Transform } from "stream";
import { pipeline } from "stream/promises";

class ReverseTransform extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    const input = chunk.toString();
    const reversed = input.split("").reverse().join("");
    this.push(reversed);
    callback();
  }
}

const transform = async () => {
  try {
    const reverseStream = new ReverseTransform();

    await pipeline(process.stdin, reverseStream, process.stdout);
  } catch (error) {
    console.error("Error in transform stream:", error.message);
    throw error;
  }
};

await transform();
