import { pipeline } from "stream/promises";
import { Transform } from "stream";

const reverseStream = new Transform({
  transform(chunk, encoding, callback) {
    const reversedChunk = chunk.toString().split("").reverse().join("") + "\n";
    callback(null, reversedChunk);
  },
});

const transform = async () => {
  await pipeline(
    process.stdin.setEncoding("utf8"),
    reverseStream,
    process.stdout
  );
};

await transform();
