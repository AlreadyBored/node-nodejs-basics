import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import  { createGzip } from 'node:zlib';
import  { pipeline } from  'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';


const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const fileToCompress = join(__dirname, 'files', 'fileToCompress.txt');
const compressedFile = join(__dirname, 'files', 'fileToCompress.txt.gz');

const compress = async () => {
    pipeline(
        createReadStream(fileToCompress),
        createGzip(),
        createWriteStream(compressedFile),
        (err) => console.error(err)
    );
};

await compress();