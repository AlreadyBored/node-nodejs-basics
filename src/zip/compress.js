import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { getDirInfo } from '../utils/getDirInfo.js';

const { __dirname } = getDirInfo(import.meta.url);
const pipe = promisify(pipeline);

const compress = async () => {
  const sourcePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const destinationPath = path.join(__dirname, 'files', 'archive.gz');

  const sourceStream = fs.createReadStream(sourcePath);
  const gzipStream = zlib.createGzip();
  const destinationStream = fs.createWriteStream(destinationPath);

  try {
    await pipe(sourceStream, gzipStream, destinationStream);

    await fsp.unlink(sourcePath);
  } catch (error) {
    console.error(error);
  }
};

await compress();

