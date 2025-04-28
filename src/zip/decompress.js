import { fileURLToPath  } from 'node:url';
import { dirname, join } from 'node:path';
import { createWriteStream, createReadStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const __filename = fileURLToPath(import.meta.url);

const decompress = async () => {
    const txtPath = join(dirname(__filename), 'files/fileToCompress.txt');
    const streamWrite = createWriteStream(txtPath);

    const gzPath = join(dirname(__filename), 'files/archive.gz');
    const streamRead = createReadStream(gzPath);

    const unzip = createUnzip();
    await pipeline(streamRead, unzip, streamWrite);
};

await decompress();