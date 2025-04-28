import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

// decompress.js - implement function that decompresses archive.gz
// back to the fileToCompress.txt with same content as before compression
// using zlib and Streams API

const decompress = async () => {
    // Write your code here
    const pathToFolder = './files';
    const sourceFilename = 'archive.gz';
    const targetFilename = 'fileToCompress.txt';

    const pathToSourceFile = `${pathToFolder}/${sourceFilename}`;
    const pathToTargetFile = `${pathToFolder}/${targetFilename}`;

    const gunzip = createGunzip();
    const readableStream = createReadStream(pathToSourceFile);
    const writableStream = createWriteStream(pathToTargetFile);

    await pipeline(readableStream, gunzip, writableStream);
};

await decompress();
