import { pipeline } from 'node:stream/promises'
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import { createGunzip } from 'node:zlib';
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { access } from 'node:fs/promises'

const decompress = async () => {
    const pathToFile = '/files/archive.gz';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    try {
        await access(`${__dirname}${pathToFile}`);
    } catch {
        throw new Error('Error to access file');
    }

    try {
        await pipeline(
            createReadStream(`${__dirname}${pathToFile}`),
            createGunzip(),
            createWriteStream(`${__dirname}/files/fileToCompress.txt`)
        );
        console.log('File was decompressed.');
    } catch {
        throw new Error('Operation error')
    }
};

await decompress();