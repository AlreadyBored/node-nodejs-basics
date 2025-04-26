import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const decompress = async () => {
    const gzipFile = join(__dirname, 'files', 'archive.gz');
    const outputFile = join(__dirname, 'files', 'fileToCompress.txt');
    
    const gunzip = createGunzip();
    const source = createReadStream(gzipFile);
    const destination = createWriteStream(outputFile);

    await new Promise((resolve, reject) => {
        source
            .pipe(gunzip)
            .pipe(destination)
            .on('finish', resolve)
            .on('error', reject);
    });
};

await decompress();