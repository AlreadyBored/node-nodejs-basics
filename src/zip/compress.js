import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const compress = () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const sourcePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const destinationPath = path.join(__dirname, 'files', 'archive.gz');
    const gzip = createGzip();

    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

compress();
