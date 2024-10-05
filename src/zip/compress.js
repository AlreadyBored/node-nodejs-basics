import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';

const compress = async () => {
    const filePath = path.join('files', 'fileToCompress.txt');
    const compressedFilePath = path.join('files', 'archive.gz');

    const fileStream = createReadStream(filePath);
    const gzipStream = createGzip();
    const compressedFileStream = createWriteStream(compressedFilePath);

    fileStream.pipe(gzipStream).pipe(compressedFileStream);

    // compressedFileStream.on('finish', () => {
    //     console.log('File successfully compressed');
    // });

    // compressedFileStream.on('error', (err) => {
    //     console.error('Error occurred:', err);
    // });
};

await compress();
