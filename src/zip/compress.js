import zlib from 'zlib';
import fs from 'fs';

export const compress = async () => {
    const gzip = zlib.createGzip();
    const readStream = fs.createReadStream('./files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('./files/archive.gz');
    readStream.pipe(gzip).pipe(writeStream);
};
compress();