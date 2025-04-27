import path from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";

const dirname = import.meta.dirname;

const compress = async () => {
  const pathFile = path.join(dirname, "files", "fileToCompress.txt");
  const pathGzip = path.join(dirname, "files", "archive.gz");

  const gzip = createGzip();
  const readStream = createReadStream(pathFile);
  const writeStream = createWriteStream(pathGzip);

  try {
    await pipeline(readStream, gzip, writeStream);
  } catch (error) {
    console.error("Failed to compress file:", error);
  }
};

await compress();

