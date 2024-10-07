import fs from 'fs';
import path from 'path';
import url from 'url';
import zlib from 'zlib';

const decompress = async () => {
    // Write your code here 
    const __filename = url.fileURLToPath(import.meta.url);
    const file = path.join(path.dirname(__filename), 'files', 'archive.gz');
    const output = path.join(path.dirname(__filename), 'files', 'fileToCompress.txt');

    const gzip = zlib.createGunzip();
    const readStream = fs.createReadStream(file);
    const writeStream = fs.createWriteStream(output);

    writeStream.on('finish', () => {
        console.log('Decompressed.');
    });
    readStream.on('error', (err) => {
        console.error('Error while reading file:', err);
    });
    writeStream.on('error', (err) => {
        console.error('Error while writing decompressed file:', err);
    });

    readStream.pipe(gzip).pipe(writeStream);
};

await decompress();