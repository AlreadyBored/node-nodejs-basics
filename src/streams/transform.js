import { pipeline } from "stream/promises";
import { Transform } from "stream";

const reversedStream = (chunk) => chunk.toString().split("").reverse().join("");
class TransformStream extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      callback(null, reversedStream(chunk));
    } catch (err) {
      callback(err);
    }
  }
}

const transform = async () => {
  const transformResult = new TransformStream();
  try {
    await pipeline(process.stdin, transformResult, process.stdout);
  } catch (error) {
    console.error(`There is an error in transforming`, err.message);
  }
};

await transform();
