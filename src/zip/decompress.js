import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const file = fs.createWriteStream(__dirname + '\\files\\fileToCompress.txt'); 
    const archive = fs.createReadStream(__dirname + '\\files\\archive.gz'); 
    const zip = zlib.createGunzip();
    archive.pipe(zip).pipe(file);
};

await decompress();