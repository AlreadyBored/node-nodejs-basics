import fs from 'fs';
import zlib from 'zlib';

export const compress = async () => {
    const input = fs.createReadStream('src/zip/files/fileToCompress.txt', 'utf-8');
    const output = fs.createWriteStream('src/zip/files/archive.gz');
    const gzip = zlib.createGzip();

    input.pipe(gzip).pipe(output);
};

compress();
