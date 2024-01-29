import fs from 'fs';
import { createGunzip } from 'zlib';

const decompress = async () => {
  const source = fs.createReadStream('archive.gz');
  const decompressedFile = fs.createWriteStream('src/zip/files/fileToCompress.txt');

  source.pipe(createGunzip()).pipe(decompressedFile);
};

await decompress();