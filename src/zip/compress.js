import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const filePath = new URL('files/fileToCompress.txt', import.meta.url);
const zipPath = new URL('files/archive.gz', import.meta.url);

const compress = async () => {
    await pipeline(createReadStream(filePath), createGzip(), createWriteStream(zipPath));
};

await compress();