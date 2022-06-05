import fs from 'fs';
import zlib from 'zlib';

export const compress = async () => {
    const gzip = zlib.createGzip();

    const inp = fs.createReadStream('./src/zip/files/fileToCompress.txt');
    var out = fs.createWriteStream('./src/zip/files/archive.gz');

    inp.pipe(gzip).pipe(out);
};

compress();