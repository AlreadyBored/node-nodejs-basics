import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "fs";

const INITIAL_FILE = "./src/zip/files/fileToCompress.txt";
const COMPRESSED_FILE = "./src/zip/files/archive.gz";

const decompress = async () => {
  const unzip = createUnzip();
  const readStream = createReadStream(COMPRESSED_FILE);
  const writeStream = createWriteStream(INITIAL_FILE);
  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
