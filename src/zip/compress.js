import path from "path";
import { fileURLToPath } from "url";
import { createGzip } from 'zlib';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const compress = async () => {
  const readFile = path.join(__dirname, '/files/fileToCompress.txt');
  const writeFile = path.join(__dirname, '/files/archive.gz');

  const readStream = fs.createReadStream(readFile, "utf8");
  const writeStream = fs.createWriteStream(writeFile);

  const compressStream = createGzip();

  readStream.pipe(compressStream).pipe(writeStream);

};

compress()
