import zlib from 'zlib';
import { createGzip } from 'zlib';
import { promisify } from 'util';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pipe = promisify(pipeline);


export const compress = async () => {
    // Write your code here 
    const gzip = createGzip();
    const source = createReadStream(path.resolve(__dirname, 'files/fileToCompress.txt'));
    const destination = createWriteStream(path.resolve(__dirname, 'files/archive.gz'));
    try {
        await pipe(source, gzip, destination);
    } catch (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    };
};
compress();