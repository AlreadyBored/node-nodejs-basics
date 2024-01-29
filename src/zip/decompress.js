import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const archive = path.join(__dirname, 'files','archive.gz');
    const destination = path.join(__dirname,'files', 'fileToCompress.txt');

    // Create a read stream for the source file
    const readStream = fs.createReadStream(archive);

    // Create a write stream for the destination file
    const writeStream = fs.createWriteStream(destination);

    // Create a gunzip transform stream
    const gunzip = zlib.createGunzip();

    // Pipe the read stream into the gunzip stream and then into the write stream
    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File decompression completed.');
    });
};

await decompress();