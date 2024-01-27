import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { createGunzip } from "zlib";

const decompress = async () => {
  const readStream = createReadStream("src/zip/files/archive.gz");
  const writeStream = createWriteStream("src/zip/files/fileToCompress.txt");

  const gzip = createGunzip();

  pipeline(readStream, gzip, writeStream, (err) => {
    if (err) {
      throw new Error(`Error: ${err.message}`);
    }
  });
};

await decompress();
