import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const inputPath = path.join(__dirname, 'files', 'archive.gz');
    const outputPath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const readStream = createReadStream(inputPath);
    const writeStream = createWriteStream(outputPath);

    const gunzip = createGunzip();
    readStream.pipe(gunzip).pipe(writeStream);
    readStream.on('error', (err) => {
        console.error('Read stream error:', err);
    });
    writeStream.on('error', (err) => {
        console.error('Write stream error:', err);
    });
    gunzip.on('error', (err) => {
        console.error('Gunzip stream error:', err);
    });
    writeStream.on('finish', () => {
        console.log('File successfully decompressed to fileToCompress.txt');
    });
};

await decompress();
