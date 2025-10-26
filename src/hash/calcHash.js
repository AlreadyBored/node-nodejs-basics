import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises';

const calcHash = async () => {
  const filePath = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);

  const hash = createHash('sha256'); 

  try {
    await pipeline(createReadStream(filePath), hash);

    console.log(hash.digest('hex'));
  } catch {
    throw new Error('FS operation failed');
  }
};

await calcHash();

