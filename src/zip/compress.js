import fs from 'fs'
import path from 'path'
import { createGzip } from 'zlib';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const compress = async () => {
  const fileToCompressPath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const fileZippedPath = path.join(__dirname, 'files', 'archive.gz');

  const readStream = fs.createReadStream(fileToCompressPath)
  const writeStream = fs.createWriteStream(fileZippedPath)
  const zipStream = createGzip()

  readStream.pipe(zipStream).pipe(writeStream)
};

await compress();
