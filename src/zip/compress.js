import fs from 'fs';
import zlib from 'zlib';

export const compress = async() => {
    const input = fs.createReadStream('./files/fileToCompress.txt');
    const output = fs.createWriteStream('./files/archive.gz');
    input.pipe(zlib.createGzip()).pipe(output);
};
compress();