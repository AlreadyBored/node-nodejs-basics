import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { resolve } from 'node:path';


const compress = async () => {
    const sourcePath = resolve('src', 'zip', 'files', 'fileToCompress.txt');
    const destinationPath = resolve('src', 'zip', 'files', 'archive.gz');

    const gzip = createGzip();

    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);

    pipeline(source, gzip, destination, (err) => {
        if (err) throw err;
    });
};

await compress();