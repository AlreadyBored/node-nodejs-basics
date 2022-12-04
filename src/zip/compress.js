import path from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'node:zlib';
import  { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { createReadStream, createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __fileToCompress = path.dirname(__filename) + '/files/fileToCompress.txt';
const __fileAfterCompress = path.dirname(__filename) + '/files/archive.gz';

const compress = async () => {
    const pipe = promisify(pipeline);
    const gzip = createGzip();
    const source = createReadStream(__fileToCompress);
    const destination = createWriteStream(__fileAfterCompress);

    await pipe(source, gzip, destination);
};

await compress();