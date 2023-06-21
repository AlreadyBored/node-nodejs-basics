import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';


const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const fileToDecompress = join(__dirname, 'files', 'archive.gz');
const decompressedFile = join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    pipeline(
        createReadStream(fileToDecompress),
        createUnzip(),
        createWriteStream(decompressedFile),
        (err) => console.error(err)
    );
};

await decompress();