import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as stream from 'stream';
import * as zlib from 'zlib';

const decompress = async () => {

  const unzip = zlib.createUnzip();

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const inputFile = fs.createReadStream(path.join(__dirname, 'files', 'archive.gz'));
  const outputFile = fs.createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
  inputFile.pipe(unzip).pipe(outputFile);

};

await decompress();
