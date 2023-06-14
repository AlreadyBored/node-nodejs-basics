import path from 'node:path';
import { fileURLToPath } from 'url';
import { pipeline } from 'node:stream/promises';
import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const archivePath = path.join(__dirname, 'files', 'archive.gz');
const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    await pipeline(createReadStream(archivePath), createGunzip(), createWriteStream(filePath));
};

await decompress();