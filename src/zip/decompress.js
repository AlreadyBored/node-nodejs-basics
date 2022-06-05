import zlib from 'zlib'
import { pipeline } from 'stream'
import {
    createReadStream,
    createWriteStream
} from 'fs';

export const decompress = async () => {
    const unzip = zlib.createGunzip();

    const source = createReadStream('./src/zip/files/archive.gz');
    const destination = createWriteStream('./src/zip/files/fileToCompress.txt');

    pipeline(source, unzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await decompress()