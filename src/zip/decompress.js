import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createGunzip } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = path.join(__dirname, 'files', 'archive.gz');
const dest = path.join(__dirname, 'files', 'fileToCompress.txt');

export const decompress = async () => {
  const gunzip = createGunzip();
  const input = createReadStream(src);
  const output = createWriteStream(dest);

  try {
    await pipeline(input, gunzip, output);
  } catch (error) {
    console.error(error);
  }
};

await decompress();
