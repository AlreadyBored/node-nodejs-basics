import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const gzip = createGzip();
  const pipe = promisify(pipeline);
  const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
  const readStream = createReadStream(pathToFile);
  const writeStream = createWriteStream(
    path.join(__dirname, 'files', 'archive.gz')
  );

  await pipe(readStream, gzip, writeStream);
};

await compress();
