import fs from 'fs';
import path from 'path';
import url from 'url';
import zlib from 'zlib';

const compress = async () => {
    // Write your code here 
    const __filename = url.fileURLToPath(import.meta.url);
    const file = path.join(path.dirname(__filename), 'files', 'fileToCompress.txt');
    const output = path.join(path.dirname(__filename), 'files', 'archive.gz');

    const gzip = zlib.createGzip();
    const readStream = fs.createReadStream(file);
    const writeStream = fs.createWriteStream(output);

    writeStream.on('finish', () => {
        console.log('Compressed.');
    });
    readStream.on('error', (err) => {
        console.error('Error while reading file:', err);
    });
    writeStream.on('error', (err) => {
        console.error('Error while writing compressed file:', err);
    });

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();