import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const inputFilePath = './src/zip/files/archive.gz';
    const outputFilePath = './src/zip/files/fileToCompress.txt';

    const readStream = fs.createReadStream(inputFilePath);
    const gunzip = zlib.createGunzip();
    const writeStream = fs.createWriteStream(outputFilePath);

    readStream.pipe(gunzip).pipe(writeStream).on('finish', () => {
        console.log(`Decompression complete: ${outputFilePath}`);
    });

};

await decompress();
