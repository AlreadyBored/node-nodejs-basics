import { fileURLToPath } from "url";
import path from "path";
import { createReadStream, createWriteStream } from "fs";
import {createGunzip} from "zlib";

const decompress = async () => {
  const unzip = createGunzip();
  const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fileToCompress.txt');
  const compressPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/archive.gz');

  const readStream = createReadStream(compressPath);
  const writeStream = createWriteStream(filePath);

  readStream.pipe(unzip).pipe(writeStream);
};
await decompress();
