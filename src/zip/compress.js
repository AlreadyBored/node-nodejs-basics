import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const outputPath = path.join(__dirname, 'files', 'archive.gz');
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(outputPath);

    const gzip = createGzip();

    readStream.pipe(gzip).pipe(writeStream);

    readStream.on('error', (err) => {
        console.error('Read stream error:', err);
    });
    writeStream.on('error', (err) => {
        console.error('Write stream error:', err);
    });
    gzip.on('error', (err) => {
        console.error('Gzip stream error:', err);
    });

    writeStream.on('finish', () => {
        console.log('File successfully compressed to archive.gz');
    });
};

await compress();
