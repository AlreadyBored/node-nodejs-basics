import path from "path";
import { fileURLToPath } from "url";
import { createUnzip } from 'zlib';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const decompress = async () => {
  const readFile = path.join(__dirname, '/files/archive.gz');
  const writeFile = path.join(__dirname, '/files/fileToCompress.txt');

  const readStream = fs.createReadStream(readFile);
  const writeStream = fs.createWriteStream(writeFile);

  const unzip = createUnzip();

  readStream.pipe(unzip).pipe(writeStream);

};

decompress();
