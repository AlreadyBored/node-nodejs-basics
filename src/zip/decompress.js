import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import path from 'path';

const decompress = async () => {
    const compressedFilePath = path.join('files', 'archive.gz');
    // changed the initial file not being the same in the same folder,.
    const decompressedFilePath = path.join('files', 'fileToCompressed.txt');

    const compressedFileStream = createReadStream(compressedFilePath);
    const gunzipStream = createGunzip();
    const decompressedFileStream = createWriteStream(decompressedFilePath);

    compressedFileStream.pipe(gunzipStream).pipe(decompressedFileStream);

    // decompressedFileStream.on('finish', () => {
    //     console.log('File successfully decompressed');
    // });

    // decompressedFileStream.on('error', (err) => {
    //     console.error('Error occurred:', err);
    // });
};

await decompress();
