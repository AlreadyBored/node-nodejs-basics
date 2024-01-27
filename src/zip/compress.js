//https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#zlib-srczip

import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { getURLPath } from "../lib.js";

const compress = async () => {
  try {
    const gzip = createGzip();
    const readStream = createReadStream(
      getURLPath("./zip/files/fileToCompress.txt")
    );
    const writeStream = createWriteStream(getURLPath("./zip/archive.gz"));
    pipeline(readStream, gzip, writeStream);
  } catch (e) {
    console.error(e.message);
  }
};

await compress();
