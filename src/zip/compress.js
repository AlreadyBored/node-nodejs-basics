import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
    const destination = path.join(__dirname,'files', 'archive.gz');

    // Create a read stream for the source file
    const readStream = fs.createReadStream(fileToCompress);

    // Create a write stream for the destination file
    const writeStream = fs.createWriteStream(destination);

    // Create a gzip transform stream
    const gzip = zlib.createGzip();

    // Pipe the read stream into the gzip stream and then into the write stream
    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File compression completed.');
    });
};

await compress();