import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { getDirInfo } from '../utils/getDirInfo.js';

const { __dirname } = getDirInfo(import.meta.url);
const pipe = promisify(pipeline);

const decompress = async () => {
  const sourcePath = path.join(__dirname, 'files', 'archive.gz');
  const destinationPath = path.join(__dirname, 'files', 'fileToCompress.txt');

  const sourceStream = fs.createReadStream(sourcePath);
  const gunzipStream = zlib.createGunzip();
  const destinationStream = fs.createWriteStream(destinationPath);

  try {
    await pipe(sourceStream, gunzipStream, destinationStream);

    await fsp.unlink(sourcePath);
  } catch (error) {
    console.error(error);
  }
};

await decompress();