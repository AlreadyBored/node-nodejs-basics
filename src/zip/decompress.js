import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url),
          __dirname = dirname(__filename),
          pathToSourceFile = './files/archive.gz',
          pathToTargetFile = './files/fileToCompress.txt',
          fullPathToSourceFile = resolve(__dirname, pathToSourceFile),
          fullPathToTargetFile = resolve(__dirname, pathToTargetFile);
    try {
        await pipeline(createReadStream(fullPathToSourceFile), createGunzip(), createWriteStream(fullPathToTargetFile));
        console.log('File was decompressed from archive.gz successfully');
    } catch (compressionError) {
        throw new Error ('File decompression was failed');
    }

};

await decompress();