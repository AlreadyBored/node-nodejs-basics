import * as fs from "fs";
import * as zlib from "zlib";
import { getPath } from '../utils/getPath.js';

const decompress = async () => {
  const fileToDecompress = getPath(import.meta.url, "archive.gz");
  const decompressedPath = getPath(import.meta.url, "fileToCompress.txt");

  const readStream = fs.createReadStream(fileToDecompress);
  const writeStream = fs.createWriteStream(decompressedPath);

  readStream.pipe(zlib.createGunzip()).pipe(writeStream);
};

await decompress();