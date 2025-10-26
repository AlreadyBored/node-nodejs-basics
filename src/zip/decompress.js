import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
  const source = new URL('./files/archive.gz', import.meta.url);
  const destination = new URL('./files/fileToCompress.txt', import.meta.url);

  try {
    await pipeline(
      fs.createReadStream(source),
      createGunzip(),                 
      fs.createWriteStream(destination)       
    );
  } catch {
    throw new Error('FS operation failed');
  }
};

await decompress();

