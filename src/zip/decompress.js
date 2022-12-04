import path from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'node:zlib';
import  { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { createReadStream, createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __fileAfterDecompress = path.dirname(__filename) + '/files/fileToCompress.txt';
const __fileToDecompress = path.dirname(__filename) + '/files/archive.gz';

const decompress = async () => {
    const gunzip = createGunzip();
    const pipe = promisify(pipeline);
    const source = createReadStream(__fileToDecompress);
    const destination = createWriteStream(__fileAfterDecompress);

    await pipe(source, gunzip, destination);
};

await decompress();