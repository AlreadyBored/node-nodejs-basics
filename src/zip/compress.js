import { fileURLToPath } from "url";
import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const compress = async () => {
  const zip = createGzip();
  const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fileToCompress.txt');
  const compressPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/archive.gz');

  const readStream = createReadStream(filePath);
  const writeStream = createWriteStream(compressPath);

  readStream.pipe(zip).pipe(writeStream);
};

await compress();
