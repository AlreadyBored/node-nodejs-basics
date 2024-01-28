import { createGzip } from 'node:zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compress = async () => {
    const gzip = createGzip();
    const source = fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const destination = fs.createWriteStream(path.join(__dirname, 'files','archive.gz'));

    pipeline(source, gzip, destination).catch((err) => {
            console.error('An error occurred:', err);
            process.exitCode = 1;
    });
};

await compress();