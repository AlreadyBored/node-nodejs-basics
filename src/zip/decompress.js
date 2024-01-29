import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const filePath = new URL('files/fileToCompress.txt', import.meta.url);
const zipPath = new URL('files/archive.gz', import.meta.url);

const decompress = async () => {
    await pipeline(createReadStream(zipPath), createGunzip(), createWriteStream(filePath));
};

await decompress();