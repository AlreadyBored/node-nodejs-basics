import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const gunzip = createGunzip();
  const source = createReadStream(__dirname + '/archive.gz');
  const destination = createWriteStream(__dirname + '/files/archive.txt');
  pipeline(source, gunzip, destination, err => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

await decompress();
