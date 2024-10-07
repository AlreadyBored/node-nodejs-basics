import { Transform } from "stream";

const transform = async () => {
  // Write your code here

  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      // Reverse the chunk and pass it to the readable side
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
