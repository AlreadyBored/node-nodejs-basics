import { createReadStream, createWriteStream } from 'fs';
import path, { dirname } from 'path';
import url from 'url';
import {pipeline} from 'stream/promises';
import {} from 'stream';
import { createGzip} from 'zlib';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const readPath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const writePath = path.join(__dirname, 'files', 'archive.gz');
    const readStream = createReadStream(readPath);
    const writeStream = createWriteStream(writePath);
    const gzipStream = createGzip()
    try{
        await pipeline(readStream, gzipStream, writeStream)
    } catch (error) {
         console.error('An error occurred:', error);
    }
};

await compress();
