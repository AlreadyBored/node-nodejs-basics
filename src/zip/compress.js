import fs from 'fs';
import { dirname, resolve } from 'path';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = () => {
    const input = fs.createReadStream(resolve(__dirname, 'files/fileToCompress.txt'), 'utf-8');
    const output = fs.createWriteStream(resolve(__dirname, 'files/archive.txt.gz'));
    const gzip = createGzip();

    input.pipe(gzip).pipe(output);
};

compress();
