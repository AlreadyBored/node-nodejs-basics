import { deflate, unzip, createUnzip, Gunzip } from 'zlib';
import zlib from 'zlib';
import { promisify } from 'util';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
const __dirname = dirname(fileURLToPath(import.meta.url));




export const decompress = async () => {
    // Write your code here 
    const archive = createReadStream(path.resolve(__dirname, 'files/archive.gz'));
    const destination = createWriteStream(path.resolve(__dirname, 'files/fileToCompress.txt'));
    const unzip = zlib.createGunzip();

    archive.pipe(unzip).pipe(destination);


};


decompress();
