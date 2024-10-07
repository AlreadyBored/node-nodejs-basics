import { Transform } from "stream";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().split("").reverse().join("");
      callback(null, reversedChunk);
    },
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);

  process.stdin.on("end", () => {
    console.log("Stream ended.");
  });

  process.stdin.on("error", (err) => {
    console.error("Error reading from stdin:", err);
  });

  reverseTransform.on("error", (err) => {
    console.error("Error in Transform Stream:", err);
  });
};

await transform();
