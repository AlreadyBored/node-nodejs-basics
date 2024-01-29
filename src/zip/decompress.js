import { createReadStream, createWriteStream } from 'fs'
import { createGunzip } from 'zlib'
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(dirName, "files", "archive.gz");
const destPath = path.join(dirName, 'files', 'fileToCompress.txt'); // 'decompressed.txt'

const decompress = async () => {
  createReadStream(sourcePath)
  .pipe(createGunzip())
  .pipe(createWriteStream(destPath))
  .on('finish', () => console.log('File successfully decompressed'))

};

await decompress();