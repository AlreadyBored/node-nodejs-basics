import {Transform} from "stream";

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

await transform();
