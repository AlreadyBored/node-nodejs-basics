import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { createGzip } from "zlib";

const compress = async () => {
  const readStream = createReadStream("src/zip/files/fileToCompress.txt");
  const writeStream = createWriteStream("src/zip/files/archive.gz");

  const gzip = createGzip();

  pipeline(readStream, gzip, writeStream, (err) => {
    if (err) {
      throw new Error(`Error: ${err.message}`);
    }
  });
};

await compress();
