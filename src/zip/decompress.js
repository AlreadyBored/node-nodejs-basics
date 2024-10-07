import fs from "fs";
import { Unzip } from "zlib";

const decompress = async () => {
  const filePath = "src/zip/files/fileToCompress.txt";
  const fileDestination = "src/zip/files/archive.gz";
  const gzip = Unzip();
  const readableStream = fs.createReadStream(fileDestination);
  const writableStream = fs.createWriteStream(filePath);
  readableStream.pipe(gzip).pipe(writableStream);
};

await decompress();
