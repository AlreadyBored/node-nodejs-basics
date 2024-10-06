import { Transform } from "stream";

const transform = async () => {
  const reversedStream = new Transform({
    transform(chunk, _encoding, cb) {
      const reversedChunk = chunk.toString().split("").reverse().join("");
      cb(null, reversedChunk);
    },
  });

  process.stdin.pipe(reversedStream).pipe(process.stdout);
};

await transform();
