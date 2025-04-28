import { Transform } from "node:stream";

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, _, cb) {
      const rvrs = chunk.toString().split("").reverse().join("") + "\n";
      cb(null, rvrs);
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
