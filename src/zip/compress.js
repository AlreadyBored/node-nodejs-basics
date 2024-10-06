import path from 'path';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import zlib from 'zlib';

const compress = async () => {
    const readFilePath = path.resolve('src', 'zip', 'files', 'fileToCompress.txt');
    const writeFilePath = path.resolve('src', 'zip', 'files', 'archive.gz');
    const gzip = zlib.createGzip();
    
    await pipeline(
        createReadStream(readFilePath, 'utf8'),
        gzip,
        createWriteStream(writeFilePath)
    );
};

await compress();