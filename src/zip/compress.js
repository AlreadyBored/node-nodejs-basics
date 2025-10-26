import { createReadStream, createWriteStream } from "node:fs";
import zlib from "node:zlib";
import path from "node:path";
import { fileURLToPath } from "url";
import { pipeline } from "node:stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const gzip = zlib.createGzip();
  const sourceFile = createReadStream(
    path.join(__dirname, "files/fileToCompress.txt")
  );
  const resultFile = createWriteStream(
    path.join(__dirname, "files/archive.gz")
  );

  await pipeline(sourceFile, gzip, resultFile);
};

await compress();
