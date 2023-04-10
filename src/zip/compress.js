import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
    try {
        // Create gzip compression
        const gzip = createGzip();

        // Create readable stream for source and writeable stream for destination
        const source = createReadStream('./files/fileToCompress.txt');
        const destination = createWriteStream('./files/archive.gz');

        // Compress data from source stream to destination stream
        source.pipe(gzip).pipe(destination);
    } catch (err) {
        throw err;
    }
};

await compress();
