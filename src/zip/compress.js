import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const compress = async () => {
    const inputFile = join(__dirname, 'files', 'fileToCompress.txt');
    const outputFile = join(__dirname, 'files', 'archive.gz');
    
    const gzip = createGzip();
    const source = createReadStream(inputFile);
    const destination = createWriteStream(outputFile);

    await new Promise((resolve, reject) => {
        source
            .pipe(gzip)
            .pipe(destination)
            .on('finish', resolve)
            .on('error', reject);
    });
};

await compress();