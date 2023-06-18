import { pipeline} from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const sousePath = `${__dirname}/files/fileToCompress.txt`;
    const destPath = `${__dirname}/files/archive.gz`

    const gzip = createGzip();
    const sourceStream = createReadStream(sousePath);
    const destinationStream = createWriteStream(destPath);

    await pipeline(sourceStream, gzip, destinationStream);
};

await compress();
