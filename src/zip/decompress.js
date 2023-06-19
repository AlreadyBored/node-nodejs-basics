import {createReadStream, createWriteStream} from 'fs';
import path, { dirname } from 'path';
import url from 'url';
import { pipeline } from 'stream/promises';
import {} from 'stream';
import {createGunzip} from 'zlib';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const readPath = path.join(__dirname, 'files', 'archive.gz');
    const writePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const readStream = createReadStream(readPath);
    const writeStream = createWriteStream(writePath);
    const gunzipStream = createGunzip();
    try {
      await pipeline(readStream, gunzipStream, writeStream);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  // Write your code here
};

await decompress();
