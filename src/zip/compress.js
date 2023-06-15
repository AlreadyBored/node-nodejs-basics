import fs from 'node:fs';
import zlib from 'node:zlib';
import { getFilesPath } from './utils.js';

const compress = async () => {
    const sourceFilePath = getFilesPath('fileToCompress.txt');
    const destFilePath = getFilesPath('archive.gz');
    const gzip = zlib.createGzip();
    const rs = fs.createReadStream(sourceFilePath);
    const ws = fs.createWriteStream(destFilePath);
    rs.pipe(gzip).pipe(ws);
};

await compress();