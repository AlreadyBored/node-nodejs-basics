import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { pipeline } from 'node:stream';
import path  from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import zlib from 'node:zlib';


const compress = async () => {
    try {

        const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
        const pathArchive = path.join(__dirname, 'files', 'archive.gz');
        
        const readStream = fs.createReadStream(pathToFile);
        const gzip = zlib.createGzip();
        const writeStream = fs.createWriteStream(pathArchive);
    
    
        pipeline(readStream, gzip, writeStream, (err) => {
            if(err) {
                console.log(err);
            }
        });

    } catch (error) {
        throw error;
    }


};

await compress();