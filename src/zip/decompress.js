import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { pipeline } from 'node:stream';
import path  from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import zlib from 'node:zlib';   

const decompress = async () => {
    try {
        const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
        const pathArchive = path.join(__dirname, 'files', 'archive.gz');

        const readStream = fs.createReadStream(pathArchive);
        const gunzip = zlib.createGunzip();
        const writeStream = fs.createWriteStream(pathToFile);
        
        pipeline(readStream, gunzip, writeStream, (err) => {
            if(err) {
                console.log(err);
            }
        });

    } catch (error) {
        throw error;
    }

};

await decompress();