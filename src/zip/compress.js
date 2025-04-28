import { fileURLToPath  } from 'node:url';
import { dirname, join } from 'node:path';
import { createWriteStream, createReadStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const __filename = fileURLToPath(import.meta.url);

const compress = async () => {
    const txtPath = join(dirname(__filename), 'files/fileToCompress.txt');
    const streamRead = createReadStream(txtPath);

    const gzPath = join(dirname(__filename), 'files/archive.gz');
    const streamWrite = createWriteStream(gzPath);

    const gzip = createGzip();

    await pipeline(streamRead, gzip, streamWrite);
};

await compress();