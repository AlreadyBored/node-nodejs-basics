import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import path from 'path';

const __dirname = path.resolve();
const source = path.join(__dirname, 'files', 'fileToCompress.txt');
const destination = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const gzip = createGzip();
    const input = createReadStream(source);
    const output = createWriteStream(destination);

    await pipeline(input, gzip, output).catch(err => process.stdout.write(String(err)));
};

await compress();