import { Transform } from "stream";

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, cb) {
      this.push(`${[...chunk.toString()].reverse().join("")}\n`);
      cb();
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
