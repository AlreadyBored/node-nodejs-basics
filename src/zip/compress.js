import { createWriteStream, createReadStream } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const compress = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const fileToCompressPath = path.join(basePath, "files/fileToCompress.txt");
  const archiveFilePath = path.join(basePath, "files/archive.gz");

  const readStream = createReadStream(fileToCompressPath);
  const writeStream = createWriteStream(archiveFilePath);

  const zip = createGzip();
  readStream.pipe(zip).pipe(writeStream);
};

await compress();
