import fs from 'fs';
import zlib from 'zlib';
const destination = 'src/zip/files/fileToCompress.txt'
const source = 'src/zip/files/archive.gz'


const decompress = async () => {
    const readableStream = fs.createReadStream(source);
    const writableStream = fs.createWriteStream(destination);
    const gunzip = zlib.createGunzip();

    readableStream
        .pipe(gunzip)                           // decompress data
        .pipe(writableStream)
        .on('finish', () => {
        console.log('File has been decompressed');
    });

    readableStream.on('error', (err) => {
        console.error('Zip error', err);
    });
};

await decompress();