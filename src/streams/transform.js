import process from "node:process";
import { Transform } from "stream";

const transform = async () => {
  // Creates transform stream for transforming data from file.
  // Set transform function to change incoming data.
  const transStr = new Transform({
    async transform(chunk, encoding, callback) {
      //read more https://nodejs.org/api/stream.html#transform_transformchunk-encoding-callback
      this.push(chunk.toString().split("").reverse().join("") + '\n');
      callback();
    },
  });
  // Read stream, then data changes in Transform stream, then prints to output.
  process.stdin.pipe(transStr).pipe(process.stdout);
};

await transform();
