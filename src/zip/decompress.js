import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream/promises';
import path from 'path';

const __dirname = path.resolve();
const source = path.join(__dirname, 'files', 'archive.gz');
const destination  = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    const unzip = createUnzip();
    const input = createReadStream(source);
    const output = createWriteStream(destination );

    await pipeline(input, unzip, output).catch(err => process.stdout.write(String(err)));
};

await decompress();