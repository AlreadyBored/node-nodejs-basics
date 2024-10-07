import { Transform } from "node:stream";
import {pipeline} from "node:stream/promises";
import {stdin, stdout} from "node:process";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, `${chunk.toString().split('').reverse().join('')}\n`);
    },
  });

  await pipeline(stdin, reverseTransform, stdout);
};

await transform();
