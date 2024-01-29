import { pipeline } from 'stream/promises';
import { createWriteStream, createReadStream } from 'fs';
import { createGzip } from 'zlib'; 

const urlFileToCompress = new URL('./files/fileToCompress.txt', import.meta.url);
const urlArchive = new URL('./files/archive.gz', import.meta.url);

const compress = async () => {
    await pipeline(createReadStream(urlFileToCompress), createGzip(), createWriteStream(urlArchive));
};

await compress();