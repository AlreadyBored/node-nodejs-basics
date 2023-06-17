import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createGunzip } from 'zlib';
import { pipeline } from 'node:stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToDecompressPath = path.join(__dirname, 'files', 'archive.gz')
const compressedFilePath = path.join(__dirname, 'files', 'Ungzipped.txt')


const decompress = async () => {
    const readStream = createReadStream(fileToDecompressPath);
    const writeStream = createWriteStream(compressedFilePath);
    const gunzib = createGunzip();

    await pipeline(
        readStream,
        gunzib,
        writeStream
    )
};

await decompress();