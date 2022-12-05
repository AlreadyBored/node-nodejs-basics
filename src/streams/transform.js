import { Transform } from "node:stream";

class TransformReverse extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      const resultSring = chunk.toString("utf8").split("").reverse().join("") + '\n';
      callback(null, resultSring);
    } catch (err) {
      callback(err);
    }
  }
}

const transform = async () => {
  const transformReverse = new TransformReverse();
  process.stdin.pipe(transformReverse).pipe(process.stdout);
};

await transform();
