import { createReadStream, createWriteStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";

const compress = async () => {
  try {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const inputFilePath = join(__dirname, "./files/fileToCompress.txt");
    const outputFilePath = join(__dirname, "./files/archive.gz");

    const gzip = createGzip();
    const sourceStream = createReadStream(inputFilePath);
    const destinationStream = createWriteStream(outputFilePath);

    await pipeline(sourceStream, gzip, destinationStream);
    console.log("File compressed successfully.");
  } catch (err) {
    console.error("Error compressing file:", err.message);
  }
};

await compress();
