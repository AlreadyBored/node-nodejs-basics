import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'node:stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const decompress = async () => {
    const from = createReadStream(path.join(__dirname, 'files', 'archive.gz'));
    const to = createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const gunzip = createGunzip();

    try {
        await pipeline(
            from,
            gunzip,
            to
        );
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
};

await decompress();
