import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';

const compress = async () => {
  const source = new URL('./files/fileToCompress.txt', import.meta.url);
  const destination = new URL('./files/archive.gz', import.meta.url);

  try {
    await pipeline(
      fs.createReadStream(source),
      createGzip(),                  
      fs.createWriteStream(destination)
    );
  } catch {
    
    throw new Error('FS operation failed');
  }
};

await compress();
