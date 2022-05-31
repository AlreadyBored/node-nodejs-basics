import zlib from 'zlib';
import fs from 'fs'

export const compress = async () => {
    const gzip = zlib.createGzip();
    const inp = fs.createReadStream('src/zip/files/fileToCompress.txt');  
    const out = fs.createWriteStream('src/zip/files/archive.gz');  
    inp.pipe(gzip).pipe(out);    
};

compress()

