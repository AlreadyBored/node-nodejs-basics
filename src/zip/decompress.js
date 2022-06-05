import * as fs from 'fs';
import * as zlib from 'zlib'

export const decompress = async () => {
    let gzip = zlib.createUnzip();
    let inp = fs.createReadStream('files/fileToCompress.txt.gz')
    let out = fs.createWriteStream('files/fileToCompress.txt');
    inp.pipe(gzip).pipe(out); 
};

decompress()