import { Transform } from "node:stream";

// transform.js - implement function that reads data from process.stdin,
// reverses text using Transform Stream and then writes it into process.stdout

const transform = async () => {
  // Write your code here

  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(
        null,
        [...chunk.toString().split("").reverse().slice(1), "\n"].join("")
      );
    },
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
