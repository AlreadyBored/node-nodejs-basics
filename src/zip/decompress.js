import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

const decompress = async () => {
    const inputFilePath = path.join('src', 'zip', 'files', 'archive.gz');
    const outputFilePath = path.join('src', 'zip', 'files', 'fileToCompress.txt');

    const readStream = fs.createReadStream(inputFilePath);
    const writeStream = fs.createWriteStream(outputFilePath);
    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File decompression completed.');
    });


};

decompress();

await decompress();