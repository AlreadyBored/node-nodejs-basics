import { Transform } from "stream";

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _encoding, callback) {
      this.push(
        chunk.reverse().slice(1).toString() + '\n'
      );
      callback();
    },
  });

  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
