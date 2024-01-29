import { Transform } from "node:stream";

const transform = async () => {
  process.stdin.pipe(reverse).pipe(process.stdout);
};

const reverse = new Transform({
  transform(chunk, _, callback) {
    callback(null, chunk.reverse());
  },
});

await transform();
