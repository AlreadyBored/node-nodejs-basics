import * as fs from "fs";
import { Transform } from "stream";

export const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _, callback) {
      callback(null, chunk.toString().split('').reverse().join(''));
    },
  });
  process.stdin.pipe(reverse).pipe(process.stdout);
};

transform()