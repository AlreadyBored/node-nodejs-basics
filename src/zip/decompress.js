import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import path from 'path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const pathToFile = path.join(__dirname, 'files', 'archive.gz');
  const output = path.join(__dirname, 'files', 'fileToCompress.txt');
  const readStream = createReadStream(pathToFile);
  const writeStream = createWriteStream(output);
  const pipe = promisify(pipeline);
  const unzip = createGunzip();

  await pipe(readStream, unzip, writeStream);
};

await decompress();
