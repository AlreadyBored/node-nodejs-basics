import { Transform } from "node:stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, done) {
      const str = chunk.toString().split("").reverse().join("");
      this.push(str);
      done();
    },
  });

  transformStream.on("data", (data) => {
    process.stdout.write(`${data}\n`);
  });

  process.stdin.pipe(transformStream);
};

await transform();
