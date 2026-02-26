import { Transform } from "node:stream";

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const input = chunk.toString();

      if (input.trim() === "") {
        this.push(null);
        process.stdin.pause();
        return;
      }

      const reversed = input.split("").reverse().join("") + "\n\n";
      callback(null, reversed);
    },
  });

  process.stdin.setEncoding("utf8");
  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
