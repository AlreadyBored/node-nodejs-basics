"use strict";

import { Transform } from "stream";

export const transform = async () => {
  const readable = process.stdin;
  const writeable = process.stdout;

  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().trim().split("").reverse().join(""));
    },
  });

  readable.pipe(reverse).pipe(writeable);
};

transform();