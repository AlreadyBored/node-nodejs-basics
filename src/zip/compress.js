import fs from 'fs';
import { fileURLToPath } from 'url';
import zlib from 'zlib';
import path from 'path';

const compress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const inputFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const outputFile = path.join(__dirname, 'files', 'archive.gz');
    const readStream = fs.createReadStream(inputFile);
    const writeStream = fs.createWriteStream(outputFile);
    const gzipStream = zlib.createGzip();

    readStream.pipe(gzipStream).pipe(writeStream);

    await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
    console.log('File compressed successfully');
};

await compress();