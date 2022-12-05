import { stdout, stdin } from "node:process";
import { Transform } from "node:stream";

class TextTransform extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      const resultString = chunk.toString("utf8").split("").reverse().join("");

      callback(null, resultString);
    } catch (err) {
      callback(err);
    }
  }
}

const transform = async () => {
  const stream = new TextTransform();

  stdin.pipe(stream).pipe(stdout);
};

await transform();
