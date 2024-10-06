import { Transform } from "node:stream";

const transform = () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split("").reverse().join("");
      this.push(reversed);
      callback();
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);

  process.stdin.on("end", () => {
    process.exit(0);
  });
};

transform();
