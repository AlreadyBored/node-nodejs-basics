import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));

const inputPath = path.join(dir, './files/fileToCompress.txt');
const outputPath = path.join(dir, './files/archive.gz');

const compress = async () => {
    pipeline(
        createReadStream(inputPath),
        createGzip(),
        createWriteStream(outputPath),
        (err) => { console.log(err) }
    );
};

await compress();