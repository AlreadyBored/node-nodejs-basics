import { Transform } from "node:stream";
import { EOL } from "node:os";

const transform = async () => {
  const stream = new Transform({
    transform(chunk, _, callback) {
      const reversedChunk = chunk.toString().split("").reverse().join("");
      this.push(reversedChunk + EOL + EOL);
      callback();
    },
  });

  process.stdin.pipe(stream).pipe(process.stdout);

  stream.on("error", (error) => {
    console.error(`Error occurred: ${error.message}`);
  });
};

await transform();
