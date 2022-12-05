import { stdout, stdin } from "node:process";
import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";

class TextTransform extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      const resultString =
        chunk.toString("utf8").split("").reverse().join("") + "\n";

      callback(null, resultString);
    } catch (err) {
      callback(err);
    }
  }
}

const transform = async () => {
  const stream = new TextTransform();

  await pipeline(stdin, stream, stdout);
};

await transform();
