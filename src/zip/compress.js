import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { join } from "node:path";

const compress = async () => {
  const inputPath = join(
    process.cwd(),
    "src",
    "zip",
    "files",
    "fileToCompress.txt"
  );
  const outputPath = join(process.cwd(), "src", "zip", "files", "archive.gz");

  const readStream = createReadStream(inputPath);
  const writeStream = createWriteStream(outputPath);
  const gzipStream = createGzip();

  readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();
