import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const decompress = async () => {
  try {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const inputFilePath = join(__dirname, "./files/archive.gz");
    const outputFilePath = join(__dirname, "./files/fileToCompress.txt");

    const gunzip = createGunzip();
    const source = createReadStream(inputFilePath);
    const destination = createWriteStream(outputFilePath);

    await pipeline(source, gunzip, destination);

    console.log("File decompressed successfully");
  } catch (err) {
    console.error("Decompression error:", err.message);
    throw err;
  }
};

await decompress();
