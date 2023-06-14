import { pipeline } from "stream/promises";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const compress = async () => {
  const inputFile = "./src/zip/files/fileToCompress.txt";
  const outputFile = "./src/zip/files/archive.gz";
  const gzip = createGzip();
  const source = createReadStream(inputFile);
  const destination = createWriteStream(outputFile);
  await pipeline(source, gzip, destination);
};

await compress();
