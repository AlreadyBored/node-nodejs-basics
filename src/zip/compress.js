import { createGzip } from 'node:zlib'
import { pipeline } from 'node:stream/promises'
import path from 'node:path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
    const directory = path.dirname(fileURLToPath(import.meta.url))
    const file = path.join(directory, 'files', 'fileToCompress.txt')
    const zipFile = path.join(directory, 'files', 'archive.gz')
    const gzip = createGzip()
    const readable = createReadStream(file)
    const writable = createWriteStream(zipFile)
    await pipeline(readable,gzip,writable, )

};

await compress();
