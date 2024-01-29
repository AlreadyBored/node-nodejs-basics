import fs from 'fs'
import path from 'path'
import { createGunzip } from 'zlib';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const decompress = async () => {
  const fileZippedPath = path.join(__dirname, 'files', 'archive.gz');
  const fileUnzippedPath = path.join(__dirname, 'files', 'fileToCompress.txt');

  const readStream = fs.createReadStream(fileZippedPath)
  const writeStream = fs.createWriteStream(fileUnzippedPath)
  const unzipStream = createGunzip()

  readStream.pipe(unzipStream).pipe(writeStream)

};

await decompress();
