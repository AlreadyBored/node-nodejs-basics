import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const fileNameToCompress = 'fileToCompress.txt';
const compressedFileName = 'archive.gz';

const compress = async () => {
    const pipe = promisify(pipeline);
    const gzip = createGzip();
    const source = createReadStream(
        join(__dirname, 'files', fileNameToCompress)
    );
    const destination = createWriteStream(
        join(__dirname, 'files', compressedFileName)
    );
    try {
        await pipe(source, gzip, destination); 
    } catch(err) {
        console.log(err.message);
    }
};

await compress();