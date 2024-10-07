import fs from "fs";
import { createGzip } from "zlib";

const compress = async () => {
  const filePath = "src/zip/files/fileToCompress.txt";
  const fileDestination = "src/zip/files/archive.gz";

  const gzip = createGzip();
  const readableStream = fs.createReadStream(filePath);
  const writableStream = fs.createWriteStream(fileDestination);
  readableStream.pipe(gzip).pipe(writableStream);
};
await compress();
