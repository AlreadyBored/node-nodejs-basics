import { createReadStream, createWriteStream, existsSync } from 'fs';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream';
import { join } from 'path';
import { __dirname } from '../utils.js';

const decompress = async () => {
  const sourseFile = join(__dirname, 'zip', 'files', 'archive.gz');
  const unzipFile = join(__dirname, 'zip', 'files', 'fileToCompress.txt');
    if (existsSync(unzipFile)) {
      throw new Error('FileToCompress.txt already exists.');
    }
  const input = createReadStream(sourseFile);
  const output = createWriteStream(unzipFile);
  const unzip = createUnzip();

  pipeline(
    input, 
    unzip,
    output,
    (error) => {
    if (error) {
      console.log(error);
    }
  })
}

await decompress();
