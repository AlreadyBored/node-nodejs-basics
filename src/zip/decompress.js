import path from 'node:path';
import fs from 'fs';
import zlib from 'zlib';
import { getDirName } from '../fs/getDir.js';

const decompress = async () => {

    const filePath1 = path.join(getDirName(import.meta.url), './files/archive.gz');
    const filePath2 = path.join(getDirName(import.meta.url), './files/fileToCompress.txt');
    const readStream = fs.createReadStream(filePath1);
    const writeStream = fs.createWriteStream(filePath2);


    readStream
        .on('data', (data) => {
            zlib.unzip(data, (error, buffer) => writeStream.write(buffer))
        });


};

await decompress();