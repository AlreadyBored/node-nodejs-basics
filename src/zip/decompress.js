import fs from 'fs';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToCompressPath = path.join(__dirname, 'files', 'fileToCompress.txt');
const fileToCreateArchive = path.join(__dirname, 'files', 'archive.gz');

//node --experimental-modules src/zip/decompress.js

const decompress = async () => {
 await pipeline(
    fs.createReadStream(fileToCreateArchive),
    zlib.createUnzip(),
    fs.createWriteStream(fileToCompressPath),
  )
}



await decompress();