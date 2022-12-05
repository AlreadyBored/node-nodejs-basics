import { Transform } from "node:stream";
import { EOL } from "node:os";

class MyTransform extends Transform {
  _transform(chunk, encoding, callback) {
    const string = chunk.toString("utf8");
    const stringWithoutEOL = string.replace(EOL, "");
    const reversedString = stringWithoutEOL.split("").reverse().join("");
    const reversedStringWithEOL = reversedString.concat(EOL);
    callback(null, reversedStringWithEOL);
  }
}

const transform = async () => {
  const transform = new MyTransform();

  process.stdin.pipe(transform).pipe(process.stdout);
};

await transform();
