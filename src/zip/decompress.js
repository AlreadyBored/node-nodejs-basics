import { createGunzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
const filePath = new URL("./files/archive.gz", import.meta.url);
const fileResultPath = new URL("./files/fileToCompress.txt", import.meta.url);

const decompress = async () => {
  const gzip = createGunzip();
  const source = createReadStream(filePath);
  const destination = createWriteStream(fileResultPath);
  try {
    await pipeline(source, gzip, destination);
  } catch (error) {
    throw Error(`\u001B[31mZip operation failed\u001B[0m ${error.message}`);
  }
};

await decompress();
