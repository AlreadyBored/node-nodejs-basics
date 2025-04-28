import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';

// compress.js - implement function that compresses file
//  fileToCompress.txt to archive.gz using zlib and Streams API

const compress = async () => {
    // Write your code here
    const pathToFolder = './files';
    const sourceFilename = 'fileToCompress.txt';
    const targetFilename = 'archive.gz';

    const pathToSourceFile = `${pathToFolder}/${sourceFilename}`;
    const pathToTargetFile = `${pathToFolder}/${targetFilename}`;

    const gzip = createGzip();
    const readableStream = createReadStream(pathToSourceFile);
    const writableStream = createWriteStream(pathToTargetFile);

    await pipeline(readableStream, gzip, writableStream);
};

await compress();
