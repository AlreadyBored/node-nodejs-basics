import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { resolve } from 'node:path';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
    const sourcePath = resolve('src', 'zip', 'files', 'archive.gz');
    const destinationPath = resolve('src', 'zip', 'files', 'fileToCompress.txt');

    const gzip = createGunzip();

    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);

    pipeline(source, gzip, destination, (err) => {
        if (err) throw err;
    });
};

await decompress();