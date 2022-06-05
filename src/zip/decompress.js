import * as fs from 'fs';
import * as zlib from 'zlib';

export const decompress = async () => {
    // Write your code here 

    const unzip = zlib.createUnzip()

    const inp = fs.createReadStream('src/zip/files/archive.gz')
    const out = fs.createWriteStream('src/zip/files/fileToCompress.txt')

    inp.pipe(unzip).pipe(out)
};

decompress()