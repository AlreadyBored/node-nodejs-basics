import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as zlib from 'zlib';

const compress = async () => {

  const gzip = zlib.createGzip();

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const inputFile = fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
  const outputFile = fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
  inputFile.pipe(gzip).pipe(outputFile);

};

await compress();
