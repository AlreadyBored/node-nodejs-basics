import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'node:stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const from = createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const to = createWriteStream( path.join(__dirname, 'files', 'archive.gz'));
    const gzip = createGzip();

    try {
        await pipeline(
            from,
            gzip,
            to
        )
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
};

await compress();
