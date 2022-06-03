import { createUnzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { folderName } from '../constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToArchiveFile = path.join(__dirname, folderName, 'archive.gz');
const pathToDecompressedFile = path.join(__dirname, folderName, 'fileToCompress.txt');

export const decompress = async () => {
    const unzip = createUnzip();
    const source = createReadStream(pathToArchiveFile);
    const decompressedFile = createWriteStream(pathToDecompressedFile);

    pipeline(
        source, 
        unzip, 
        decompressedFile, 
        err => err ? console.error(err) : null
    );
};

decompress();