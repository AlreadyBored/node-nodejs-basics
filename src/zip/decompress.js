import fs from 'fs';
import zlib from 'zlib';

export const decompress = async () => {
    const gzip = zlib.createGunzip();

    const inp = fs.createReadStream('./src/zip/files/archive.gz');
    var out = fs.createWriteStream('./src/zip/files/fileToCompress.txt');

    inp.pipe(gzip).pipe(out);
};

decompress();