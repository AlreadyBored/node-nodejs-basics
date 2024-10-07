import zlib from "node:zlib";
import path from "node:path";
import fs from "node:fs";

const compress = async () => {
  const filePath = path.join(import.meta.dirname + "/files/fileToCompress.txt");
  const outputPath = path.join(import.meta.dirname + "/files/archive.gz");
  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(outputPath);
  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
