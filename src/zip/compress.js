import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    const file = fs.createReadStream(__dirname + '\\files\\fileToCompress.txt'); 
    const archive = fs.createWriteStream(__dirname + '\\files\\archive.gz'); 
    const zip = zlib.createGzip();
    file.pipe(zip).pipe(archive); 
};

await compress();