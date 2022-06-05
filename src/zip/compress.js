import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
  // Write your code here
  const gzip = createGzip();
  const source = createReadStream(
    join(__dirname, "files", "fileToCompress.txt")
  );
  const destination = createWriteStream(join(__dirname, "files", "archive.gz"));

  await pipeline(source, gzip, destination);
};

await compress();
