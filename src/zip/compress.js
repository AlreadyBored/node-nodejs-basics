import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const compress = async () => {
  const gZlib = createGzip();
  const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fileToCompress.txt');
  const compressPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/archive.gz');

  const readStream = createReadStream(filePath);
  const writeStream = createWriteStream(compressPath);

  readStream.pipe(gZlib).pipe(writeStream);
};

await compress();
