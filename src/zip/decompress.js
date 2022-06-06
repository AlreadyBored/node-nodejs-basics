import zlib from 'zlib';
import fs from 'fs';

export const decompress = async () => {
    const unzip = zlib.createUnzip();
    const from = fs.createReadStream('./files/fileToCompress.txt.gz');
    const to = fs.createWriteStream('./files/fileToCompress.txt');

    from.pipe(unzip).pipe(to);
};