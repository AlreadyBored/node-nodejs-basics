import fs from 'fs';
import zlib from 'zlib';

export const decompress = async () => {
    const input = fs.createReadStream('src/zip/files/archive.gz');
    const output = fs.createWriteStream('src/zip/files/filToCompress.txt');
    const gzip = zlib.createGunzip();

    input.pipe(gzip).pipe(output);
};

decompress();
