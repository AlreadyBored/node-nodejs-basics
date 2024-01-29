import path from 'path';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import zlib from 'zlib';

const decompress = async () => {
    const readFilePath = path.resolve('src', 'zip', 'files', 'archive.gz');
    const writeFilePath = path.resolve('src', 'zip', 'files', 'fileToCompress.txt');
    const gzip = zlib.createUnzip();
    
    await pipeline(
        createReadStream(readFilePath),
        gzip,
        createWriteStream(writeFilePath)
    );    
};

await decompress();