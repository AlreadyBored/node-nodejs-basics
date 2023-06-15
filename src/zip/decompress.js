import fs from 'node:fs';
import zlib from 'node:zlib';
import { getFilesPath } from './utils.js';

const decompress = async () => {
    const sourceFilePath = getFilesPath('archive.gz');
    const destFilePath = getFilesPath('fileToCompress.txt');
    const gzip = zlib.createUnzip();
    const rs = fs.createReadStream(sourceFilePath);
    const ws = fs.createWriteStream(destFilePath);
    rs.pipe(gzip).pipe(ws);
};

await decompress();