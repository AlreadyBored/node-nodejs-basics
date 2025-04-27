import path from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream/promises";

const dirname = import.meta.dirname;

const decompress = async () => {
  const pathGzip = path.join(dirname, "files", "archive.gz");
  const pathFile = path.join(dirname, "files", "fileToCompress.txt");

  const gunzip = createGunzip();
  const readStream = createReadStream(pathGzip);
  const writeStream = createWriteStream(pathFile);

  try {
    await pipeline(readStream, gunzip, writeStream);
  } catch (error) {
    console.error("Failed to decompress file:", error);
  }
};

await decompress();

