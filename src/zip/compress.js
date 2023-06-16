import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const inputFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const outputFilePath = path.join(__dirname, 'files', 'archive.gz');

    try {
        const inputStream = createReadStream(inputFilePath);
        const gzipStream = createGzip();
        const outputStream = createWriteStream(outputFilePath);

        inputStream.pipe(gzipStream).pipe(outputStream);

        await new Promise((resolve, reject) => {
            outputStream.on('finish', resolve);
            outputStream.on('error', reject);
        });

        console.log('File compressed successfully!');
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await compress();