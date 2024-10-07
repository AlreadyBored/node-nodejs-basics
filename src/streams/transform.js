import { Transform } from "stream";

const transform = async () => {
  // Write your code here
  process.stdout.write("Start writing, the stream is open\n");
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split("").reverse().join("");
      this.push(reversed);
      callback();
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
