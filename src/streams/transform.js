import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      this.data = (this.data || "") + chunk.toString();
      callback();
    },
    flush(callback) {
      const reversed = this.data.split("").reverse().join("");
      this.push(reversed);
      callback();
    },
  });

  await pipeline(process.stdin, reverseTransform, process.stdout);
};

await transform();
