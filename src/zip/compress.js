import { pipeline } from 'node:stream/promises'
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import { createGzip } from 'node:zlib';
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const compress = async () => {
    const pathToFile = '/files/fileToCompress.txt';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    try {
        await pipeline(
            createReadStream(`${__dirname}${pathToFile}`),
            createGzip(),
            createWriteStream(`${__dirname}/files/archive.gz`)
        );
        console.log('File was compressed.');
    } catch {
        throw new Error('Operation error')
    }
};

await compress();