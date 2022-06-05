import * as fs from 'fs';
import * as zlib from 'zlib'

export const compress = async () => {
    let gzip = zlib.createGzip();
    let inp = fs.createReadStream('files/fileToCompress.txt');
    let out = fs.createWriteStream('files/fileToCompress.txt.gz');
    inp.pipe(gzip).pipe(out);
};

compress()