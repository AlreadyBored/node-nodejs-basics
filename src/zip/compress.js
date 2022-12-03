import fs from 'fs'
import { createGzip } from 'zlib'
import { pipeline } from 'stream'

const compress = async () => {
    const src = 'src/zip/files/fileToCompress.txt';
    const dest = 'src/zip/files/archive.gz ';

    const gzip = createGzip();
    const source = fs.createReadStream(src);
    const destination = fs.createWriteStream(dest);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await compress();