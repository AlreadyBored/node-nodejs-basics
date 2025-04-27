import { Transform } from "node:stream";

const transform = async () => {
  return new Promise((resolve, reject) => {
    const reverseStream = new Transform({
      transform(chunk, _, callback) {
        const reversedChunk = chunk.toString().replace(/\n$/, '').split("").reverse().join("");
        callback(null, reversedChunk + "\n".repeat(2));
      },
    });

    reverseStream.on("error", (err) => {
      reject(err);
    });

    process.stdin.pipe(reverseStream).pipe(process.stdout);

    process.stdin.on("end", () => {
      resolve();
    });
  });
};

await transform();
