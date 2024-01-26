import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const fileToCompress = join(__dirname, 'files', 'fileToCompress.txt');
    const archivedFile = join(__dirname, 'files', 'archive.gz');
    const readStream = createReadStream(fileToCompress);
    const gzip = createGzip();
    const writeStream = createWriteStream(archivedFile);

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();