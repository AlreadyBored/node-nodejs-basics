import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from "node:fs";

const decompress = async () => {
    const compressedFilePath   = new URL('files/archive.gz', import.meta.url);
    const decompressedFilePath = new URL('files/fileToCompress.txt', import.meta.url);

    const readStream  = createReadStream(compressedFilePath);
    const writeStream = createWriteStream(decompressedFilePath);

    readStream
        .pipe(createGunzip())
        .pipe(writeStream)

};

await decompress();