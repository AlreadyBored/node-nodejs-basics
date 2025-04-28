import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url),
          __dirname = dirname(__filename),
          pathToSourceFile = './files/fileToCompress.txt',
          pathToTargetFile = './files/archive.gz',
          fullPathToSourceFile = resolve(__dirname, pathToSourceFile),
          fullPathToTargetFile = resolve(__dirname, pathToTargetFile);

    const readableStream = createReadStream(fullPathToSourceFile);
    const writableStream = createWriteStream(fullPathToTargetFile);
    const gzip = createGzip();

    try {
        // await pipeline(readableStream, gzip, writableStream);
        await pipeline(createReadStream(fullPathToSourceFile), createGzip(), createWriteStream(fullPathToTargetFile));
        console.log('File was compressed to archive.gz successfully');
    } catch (compressionError) {
        throw new Error ('File compression was failed');
    }

};

await compress();