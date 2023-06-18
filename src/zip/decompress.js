import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const destPath = `${__dirname}/files/fileToCompress.txt`;
    const sousePath = `${__dirname}/files/archive.gz`

    const unzip = createUnzip();
    const readStream = createReadStream(sousePath);
    const destination = createWriteStream(destPath);

    await pipeline(readStream, unzip, destination);
};

await decompress();
