import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

// there was error about __dirname, get this solution from gpt
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    // Write your code here 
    const inputFilePath = path.join(__dirname, 'files', 'fileToCompress.txt'); 
    const outputFilePath = path.join(__dirname, 'files', 'archive.gz'); 

    const readableStream = fs.createReadStream(inputFilePath);
    
    const writableStream = fs.createWriteStream(outputFilePath);

    const gzip = zlib.createGzip();

    readableStream
        .pipe(gzip) 
        .pipe(writableStream) 
        .on('finish', () => console.log('File successfully compressed.')) 
        .on('error', (err) => console.error('Error during compression:', err));
};

await compress();