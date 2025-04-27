import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, _, callback) {
      const reversedChunk = chunk
        .toString()
        .replace(/\n$/, "")
        .split("")
        .reverse()
        .join("");
      callback(null, reversedChunk + "\n".repeat(2));
    },
  });

  try {
    await pipeline(process.stdin, reverseStream, process.stdout);
  }
    catch (error) {
        console.error("Pipeline failed.", error);
    }
};

await transform();
