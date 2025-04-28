import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToCompress = join(__dirname, "files", "fileToCompress.txt");
const dist = join(__dirname, "files", "archive.gz");

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(fileToCompress);
  const destination = createWriteStream(dist);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("Compression failed:", err);
      process.exitCode = 1;
    }
  });
};

await compress();
