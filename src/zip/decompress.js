import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const fileName = 'fileToCompress.txt';
const compressedFileName = 'archive.gz';

const decompress = async () => {
    const pipe = promisify(pipeline);
    const gunzip = createGunzip();
    const source = createReadStream(
        join(__dirname, 'files', compressedFileName)
    );
    const destination = createWriteStream(
        join(__dirname, 'files', fileName)
    );
    try {
        await pipe(source, gunzip, destination);
    } catch (err) {
        console.error(err.message);
    }
};

await decompress();