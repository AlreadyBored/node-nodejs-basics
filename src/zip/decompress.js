import { createReadStream, createWriteStream } from 'fs';
import path from 'node:path';
import zlib from 'zlib';
import { ERROR_MSG, FILES_PATH } from '../constants.js';

const FILE_NAME = 'fileToCompress.txt';
const ZIP_FILE_NAME = 'archive.gz';
const FILE_URL = path.join(import.meta.dirname, FILES_PATH, FILE_NAME);
const ZIP_FILE_URL = path.join(import.meta.dirname, FILES_PATH, ZIP_FILE_NAME);


const decompress = async () => {
    try {
            const file = await createReadStream(ZIP_FILE_URL);
            const zipFile = await createWriteStream(FILE_URL);
            const unzip = zlib.createGunzip();
            const data = file.read();
            file.on('readable', () => {
            if(data) {
                file.pipe(unzip).pipe(zipFile);
                }
            }
        )}
         catch (err) {
                console.log(err);
                throw new Error(ERROR_MSG);
         
    };
}

await decompress();