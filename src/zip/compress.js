import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    // Write your code here 
    const readStream = fs.createReadStream(`${__dirname}/files/fileToCompress.txt`, {encoding:'utf-8'});
    const writeStream = fs.createWriteStream(`${__dirname}/files/archive.gz`);
    const compressStream = zlib.createGzip();

    const handleError = (err) => {
        console.log(err)
        readStream.destroy();
        writeStream.end('Finished with error.')
    }

    readStream
        .on('error', handleError)
        .pipe(compressStream)
        .pipe(writeStream)
        .on('error', handleError)
};

await compress();