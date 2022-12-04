import fs from 'fs';
import { dirname, resolve } from 'path';
import { createGunzip } from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = () => {
    const input = fs.createReadStream(resolve(__dirname, 'files/archive.txt.gz'));
    const output = fs.createWriteStream(resolve(__dirname, 'files/fileToDecompress.txt'), 'utf-8');
    const gunzip = createGunzip();

    input.pipe(gunzip).pipe(output);
};

decompress();