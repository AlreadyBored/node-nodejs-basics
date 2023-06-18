import { createUnzip } from 'node:zlib'
import { pipeline } from 'node:stream/promises'
import path from 'node:path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
    const directory = path.dirname(fileURLToPath(import.meta.url))
    const file = path.join(directory, 'files', 'fileToCompress.txt')
    const zipFile = path.join(directory, 'files', 'archive.gz')
    const unzip = createUnzip()
    const readable = createReadStream(zipFile)
    const writable = createWriteStream(file)
    await pipeline(readable, unzip, writable)
};

await decompress();
