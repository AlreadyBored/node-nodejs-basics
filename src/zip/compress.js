import fs from 'fs';
import zlib from 'zlib';
const source = 'src/zip/files/fileToCompress.txt'
const destination = 'src/zip/files/archive.gz'


const compress = async () => {
    const readableStream = fs.createReadStream(source);
    const writableStream = fs.createWriteStream(destination);
    const gzip = zlib.createGzip();

    readableStream
        .pipe(gzip)                                //compress data
        .pipe(writableStream)
        .on('finish', () => {
        console.log('File has been compressed');
    });

    readableStream.on('error', (err) => {
        console.error('Zip error', err);
    });
};

await compress();