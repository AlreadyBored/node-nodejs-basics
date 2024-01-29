import { createGunzip } from 'node:zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'node:path';
import { createWriteStream, createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const gunzip = createGunzip();
const input = createReadStream(join(__dirname, 'files', 'archive.gz'));
const output = createWriteStream(join(__dirname, 'files', 'fileToCompress.txt'));

const decompress = async () => {
  await pipeline(
    input,
    gunzip,
    output
  );  
};

await decompress().catch(console.error);
