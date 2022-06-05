import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

export const compress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const source =  createReadStream(resolve(__dirname, 'files', 'fileToCompress.txt'));
    const destination = createWriteStream(resolve(__dirname, 'files', 'archive.gz'));
    const gzip = createGzip();

    pipeline(source, gzip, destination, (err) => err && console.log(err));
};

compress();