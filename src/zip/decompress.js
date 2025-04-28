import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import {createReadStream, createWriteStream} from 'fs';
import {createUnzip} from 'zlib';

const decompress = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const compressedFile = join(__dirname, 'files', 'archive.gz');
    const fileToDecompress = join(__dirname, 'files', 'fileToCompress.txt');

    const readStream = createReadStream(compressedFile);
    const writeStream = createWriteStream(fileToDecompress);
    const unzip = createUnzip();

    readStream
        .pipe(unzip)
        .pipe(writeStream)
        .on('error', () => {
            throw new Error('FS operation failed');
        });
};

await decompress();