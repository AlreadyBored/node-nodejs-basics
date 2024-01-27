//Implement function that decompresses archive.gz back to the fileToCompress.txt with same content as before compression using zlib and Streams API
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createUnzip } from "node:zlib";
import { getURLPath } from "../lib.js";

const decompress = async () => {
  try {
    const unzip = createUnzip();
    const readStream = createReadStream(getURLPath("./zip/archive.gz"));
    const writeStream = createWriteStream(
      getURLPath("./zip/files/fileToCompress.txt")
    );
    pipeline(readStream, unzip, writeStream);
  } catch (e) {
    console.error(e.message);
  }
};

await decompress();
