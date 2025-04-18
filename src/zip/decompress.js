import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
const decompress = async () => {
    await pipeline(
        createReadStream('src/zip/files/archive.gz'),
        createGunzip(),
        createWriteStream('src/zip/files/fileToCompress.txt')
      );
};

await decompress();