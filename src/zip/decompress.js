import fs from 'fs';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const decompress = async () => {
 await pipeline(
    fs.createReadStream('./zip/files/archive.gz'),
    zlib.createUnzip(),
    fs.createWriteStream('./zip/files/fileToCompress.txt'),
  )
}



await decompress();