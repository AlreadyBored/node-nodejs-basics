import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const file = fs.createReadStream('./files/fileToCompress.txt'); 
    const archive = fs.createWriteStream('./files/archive.gz'); 
    const zip = zlib.createGzip();
    file.pipe(zip).pipe(archive); 
};

await compress();