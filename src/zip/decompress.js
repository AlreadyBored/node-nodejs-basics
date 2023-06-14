import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const decompress = async () => {
  const inputFile = "./src/zip/files/archive.gz";
  const outputFile = "./src/zip/files/fileToCompress.txt";
  const gunzip = createGunzip();
  const source = createReadStream(inputFile);
  const destination = createWriteStream(outputFile);
  await pipeline(source, gunzip, destination);
};

await decompress();
