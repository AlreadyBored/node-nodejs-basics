import fs from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';

const compress = async () => {
    // Write your code here

    const srcPath = new URL('./files/fileToCompress.txt', import.meta.url);
    const destinationPath = new URL('./files/archive.gz', import.meta.url);

    const readStream = fs.createReadStream(srcPath);
    const writeStream = fs.createWriteStream(destinationPath);

    await pipeline(readStream, createGzip(), writeStream);

};

await compress();