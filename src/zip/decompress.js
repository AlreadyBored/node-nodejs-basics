import fs, { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
    const unzip = createUnzip();
    const inp = fs.createReadStream('src/zip/archive.gz');
    const out = fs.createWriteStream('src/zip/fileToCompress.txt');
    inp.pipe(unzip).pipe(out);
};

decompress();
