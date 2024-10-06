import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "fs";

const INITIAL_FILE = "./src/zip/files/fileToCompress.txt";
const COMPRESSED_FILE = "./src/zip/files/archive.gz";

const compress = async () => {
  const zip = createGzip();
  const readStream = createReadStream(INITIAL_FILE);
  const writeStream = createWriteStream(COMPRESSED_FILE);
  readStream.pipe(zip).pipe(writeStream);
};

await compress();
