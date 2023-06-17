import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createGzip } from 'zlib';
import { pipeline } from 'node:stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToCompressPath = path.join(__dirname, 'files', 'fileToCompress.txt')
const compressedFilePath = path.join(__dirname, 'files', 'archive.gz')

const compress = async () => {
    const readStream = createReadStream(fileToCompressPath, 'utf-8');
    const writeStream = createWriteStream(compressedFilePath);
    const gzib = createGzip();
    
    await pipeline(
        readStream,
        gzib,
        writeStream
    )
};

await compress();