import { pipeline } from 'node:stream/consumers';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));

const outputPath = path.join(dir, './files/fileToCompress.txt');
const inputPath = path.join(dir, './files/archive.gz'); 

const decompress = async () => {
    try {
        await pipeline(
        createReadStream(inputPath),
        createUnzip(),
        createWriteStream(outputPath))
    } catch (err) {
        throw new Error('FS operation failed');
    } 
};

await decompress();