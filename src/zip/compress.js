import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
    try {
        const gzip = createGzip();
        const source = createReadStream('./files/fileToCompress.txt');
        const destination = createWriteStream('./files/archive.gz');
        source.pipe(gzip).pipe(destination);
    } catch (err) {
        throw err;
    }
};

await compress();
