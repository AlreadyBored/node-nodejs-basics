import { createWriteStream, createReadStream } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createGunzip } from "zlib";

const decompress = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const archiveFilePath = path.join(basePath, "files/archive.gz");
  const fileToCompressPath = path.join(basePath, "files/fileToCompress.txt");

  const readStream = createReadStream(archiveFilePath);
  const writeStream = createWriteStream(fileToCompressPath);

  const unzip = createGunzip();
  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();