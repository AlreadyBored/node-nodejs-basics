import { createReadStream, createWriteStream } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";
import { Transform } from "node:stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversedString = chunk.toString().split("").reverse().join("");

      this.push(reversedString);
      callback();
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
