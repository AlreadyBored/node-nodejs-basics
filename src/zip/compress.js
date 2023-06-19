import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {

    const readStream = fs.createReadStream('./src/zip/files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('./src/zip/files/archive.gz');
    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();