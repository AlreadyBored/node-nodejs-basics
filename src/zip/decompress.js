import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const inputFilePath = path.join(__dirname, 'files', 'archive.gz');
    const outputFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

    try {
        const inputStream = createReadStream(inputFilePath);
        const gunzipStream = createGunzip();
        const outputStream = createWriteStream(outputFilePath);

        inputStream
            .pipe(gunzipStream)
            .pipe(outputStream);

        await new Promise((resolve, reject) => {
            outputStream.on('finish', resolve);
            outputStream.on('error', reject);
        });

        console.log('File decompressed successfully!');
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await decompress();