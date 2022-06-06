import * as fs from 'fs';
import * as zlib from 'zlib';

export const decompress = async () => {
    const  unzip = zlib.createUnzip();

    const read = fs.createReadStream('./zip/files/archive.txt.gz');
    const  write = fs.createWriteStream('./zip/files/fileToCompress.txt');
    read.pipe(unzip).pipe(write);
};

decompress()