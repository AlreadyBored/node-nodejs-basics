import {Transform} from "stream";
import {pipeline} from "stream/promises";

const transform = async () => {
  // Write your code here
  const text = new Transform({
    transform(chunk, encoding, callback) {
      let transfromedChunk = chunk
        .toString()
        .split("")
        .reduce((acc, char) => char + acc, "");
      callback(null, transfromedChunk);
    },
  });

  try {
    process.stdin.pipe(text).pipe(process.stdout);
  } catch (err) {
    throw new Error(err);
  }
};

const transform2 = async () => {
  // Write your code here
  const reversedTransform = new Transform({
    transform(chunk, _, callback) {
      let transfromedChunk = chunk
        .toString()
        .split("")
        .reduce((acc, char) => char + acc, "");
      callback(null, transfromedChunk);
    },
  });
  await pipeline(process.stdin, reversedTransform, process.stdout);
};

await transform();
