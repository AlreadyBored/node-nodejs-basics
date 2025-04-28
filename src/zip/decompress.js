import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const decompress = async () => {
  const gunzip = createGunzip();
  const source = createReadStream('src/zip/files/archive.gz');
  const destination = createWriteStream('src/zip/files/fileToCompress.txt');

  await pipeline(source, gunzip, destination);
};

await decompress();
