import { createGzip, createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const decompress = async (sousePath, destPath) => {
    const unzip = createUnzip();
    const readStream = createReadStream(sousePath);
    const destination = createWriteStream(destPath);

    await pipeline(readStream, unzip, destination);
};

const compress = async (sousePath, destPath) => {
    const gzip = createGzip();
    const sourceStream = createReadStream(sousePath);
    const destinationStream = createWriteStream(destPath);

    await pipeline(sourceStream, gzip, destinationStream);
};


export {decompress, compress}
