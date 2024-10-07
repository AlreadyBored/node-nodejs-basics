import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const file = fs.createWriteStream('./files/fileToCompress.txt'); 
    const archive = fs.createReadStream('./files/archive.gz'); 
    const zip = zlib.createGunzip();
    archive.pipe(zip).pipe(file);
};

await decompress();