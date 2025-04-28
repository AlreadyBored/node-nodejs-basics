import { createHash } from 'crypto';
import zlib  from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import path from 'node:path';
import { ERROR_MSG, FILES_PATH } from '../constants.js';

const FILE_NAME = 'fileToCompress.txt';
const ZIP_FILE_NAME = 'archive.gz';
const FILE_URL = path.join(import.meta.dirname, FILES_PATH, FILE_NAME);
const ZIP_FILE_URL = path.join(import.meta.dirname, FILES_PATH, ZIP_FILE_NAME);


const compress = async () => {
    try {
        const file = await createReadStream(FILE_URL);
        const zipFile = await createWriteStream(ZIP_FILE_URL);
        const gzip = zlib.createGzip();
        const data = file.read();
        file.on('readable', () => {
        if(data) {
            file.pipe(gzip).pipe(zipFile);
            }
        }
    )}
     catch (err) {
            console.log(err);
            throw new Error(ERROR_MSG);
        } 
};

await compress();