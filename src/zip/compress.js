import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { createGzip } from 'zlib';
import { getDir } from '../utils/getDir.js';

const dirname = getDir(import.meta.url);
const fileToCompress = path.join(dirname, 'files', 'fileToCompress.txt');
const destFile = path.join(dirname, 'files', 'archive.gz');

const gzip = createGzip();
const source = createReadStream(fileToCompress);
const destination = createWriteStream(destFile);

const compress = async () => {
    source.pipe(gzip).pipe(destination);
};

await compress();