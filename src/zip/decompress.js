import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const decompress = async (inputFile, outputFile) => {
    const readStream = fs.createReadStream(inputFile);
    const writeStream = fs.createWriteStream(outputFile);

    const decompressFile = zlib.createGunzip();
    readStream.pipe(decompressFile).pipe(writeStream);

    decompressFile.on('error', (error) => {
        console.error('Error occured during decompressing the file.', error);
    });

    writeStream.on('finish', () => {
        console.log('Decompression successfully implemented');
    });
    writeStream.on('error', (error) => {
        console.log('Error occured during writing into the file.', error);
    });
    
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputFile = path.join(__dirname, 'files', 'archive.gz');
const outputFile = path.join(__dirname, 'files', 'fileToCompress.txt');

await decompress(inputFile, outputFile);