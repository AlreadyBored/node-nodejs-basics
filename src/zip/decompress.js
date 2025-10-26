import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';

const decompress = async () => {
  const source = createReadStream('./src/zip/files/archive.gz');
  const destination = createWriteStream('./src/zip/files/fileToCompress.txt');
  const gunzip = createGunzip();
  
  await pipeline(source, gunzip, destination);
};

await decompress();
