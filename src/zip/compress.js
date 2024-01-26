import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = getDir(import.meta.url);

const inputPath = path.join(dir, './files/fileToCompress.txt');
const outputPath = path.join(dir, './files/archive.gz');

const compress = async () => {
    try {
        await pipeline(
        createReadStream(inputPath),
        createGzip(),
        createWriteStream(outputPath));
    } catch (err) {
        throw new Error('FS operation failed');
    } 
};

await compress();