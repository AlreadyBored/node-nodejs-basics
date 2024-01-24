import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { createGunzip } from 'zlib';
import { getDir } from '../utils/getDir.js';

const dirname = getDir(import.meta.url);
const fileToDeCompress = path.join(dirname, 'files', 'archive.gz');
const destFile = path.join(dirname, 'files', 'fileToCompress.txt');

const gunzip = createGunzip();
const source = createReadStream(fileToDeCompress);
const destination = createWriteStream(destFile);

const decompress = async () => {
    source.pipe(gunzip).pipe(destination);
};

await decompress();