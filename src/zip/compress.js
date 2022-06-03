import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { folderName } from '../constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, folderName, 'fileToCompress.txt');
const pathToCompressedFile = path.join(__dirname, folderName, 'archive.gz');

export const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(pathToFile);
    const compressedFile = createWriteStream(pathToCompressedFile);

    pipeline(
        source, 
        gzip, 
        compressedFile, 
        err => err ? console.error(err) : null
    );
};

compress();