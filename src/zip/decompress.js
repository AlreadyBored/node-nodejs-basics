import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

// there was error about __dirname, get this solution from gpt
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    // Write your code here 
    const inputFilePath = path.join(__dirname, 'files', 'archive.gz'); 
    const outputFilePath = path.join(__dirname, 'files', 'fileToCompress.txt'); 

    const readableStream = fs.createReadStream(inputFilePath);
    
    const writableStream = fs.createWriteStream(outputFilePath);

    const gunzip = zlib.createGunzip();

    readableStream
        .pipe(gunzip) 
        .pipe(writableStream) 
        .on('finish', () => console.log('File successfully decompressed.')) 
        .on('error', (err) => console.error('Error during decompression:', err)); 
};

await decompress();