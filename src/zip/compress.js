import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const compress = async () => {
  // Write your code here

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const readable = createReadStream(
    path.resolve(__dirname, "./files/fileToCompress.txt")
  );
  const writable = createWriteStream(
    path.resolve(__dirname, "./files/archive.gz")
  );

  await pipeline(readable, createGzip(), writable);
};

await compress();
