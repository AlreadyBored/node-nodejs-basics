import fs, { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const handleStream = createReadStream(filePath);
    handleStream
        .pipe(createGzip())
        .pipe(createWriteStream('archive.gz'))
        .on('finish', () => {
            console.log(`Compression done: archive.gz`)
        })    
};

compress();
