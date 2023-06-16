/*
implement function that reads data from process.stdin, 
reverses text using Transform Stream and then writes it into process.stdout
*/

import { Transform  } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const reverseString = (str) => str.split("").reverse().join("");

  const stream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, reverseString(chunk.toString()));
    },
  });

  await pipeline(process.stdin, stream, process.stdout);
};

await transform();