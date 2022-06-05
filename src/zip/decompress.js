import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream';

export const decompress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const source = createReadStream(resolve(__dirname, 'files', 'archive.gz'));
    const destination =  createWriteStream(resolve(__dirname, 'files', 'fileToCompress.txt'));
    const unzip = createUnzip();

    pipeline(source, unzip, destination, (err) => err && console.log(err));
};

decompress();