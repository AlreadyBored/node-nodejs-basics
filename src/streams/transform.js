import process from "process";
import { Transform } from "stream";

const transform = async () => {
  const stdin = process.stdin.on("data", () => {});

  const reversedData = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  stdin.pipe(reversedData).pipe(process.stdout);
};

await transform();
