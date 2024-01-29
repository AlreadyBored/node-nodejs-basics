import { createUnzip } from "node:zlib";
import fs from "node:fs";

const sourcePath = "src/zip/files/fileToCompress.txt";
const archivePath = "src/zip/files/archive.gz";

const decompress = async () => {
  const stream = fs.createReadStream(archivePath);
  stream
    .pipe(createUnzip())
    .pipe(fs.createWriteStream(sourcePath))
    .on("finish", () => {
      console.log(`Decompression process done: ${sourcePath}`);
    });
};

await decompress();
