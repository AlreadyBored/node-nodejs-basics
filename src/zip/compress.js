import { createGzip } from "node:zlib";
import fs from "node:fs";

const sourcePath = "src/zip/files/fileToCompress.txt";
const archivePath = "src/zip/files/archive.gz";

const compress = async () => {
  const stream = fs.createReadStream(sourcePath);
  stream
    .pipe(createGzip())
    .pipe(fs.createWriteStream(archivePath))
    .on("finish", () => {
      console.log(`Compression process done: ${archivePath}`);
    });
};

await compress();
