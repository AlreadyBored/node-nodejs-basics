import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));

const outputPath = path.join(dir, './files/fileToCompress.txt');
const inputPath = path.join(dir, './files/archive.gz'); 

const decompress = async () => {
    pipeline(
        createReadStream(inputPath),
        createUnzip(),
        createWriteStream(outputPath),
        (err) => { console.log(err) }
    );
};

await decompress();