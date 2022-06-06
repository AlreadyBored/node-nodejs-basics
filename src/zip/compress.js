import zlib from 'zlib';
import fs from 'fs';

export const compress = async () => {
    const gzip = zlib.createGzip();
    const from = fs.createReadStream('./files/fileToCompress.txt');
    const to = fs.createWriteStream('./files/fileToCompress.txt.gz');

    from.pipe(gzip).pipe(to);
};