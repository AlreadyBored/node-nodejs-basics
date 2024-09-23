import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import zlib from 'node:zlib'

import { getDirPath } from '../utils/getDirPath.js';


const compress = async () => {
    const dirPath = getDirPath(import.meta.url);
    const fileToCompressPath = path.join(dirPath, 'files', 'fileToCompress.txt');
    const compressedFilePath = path.join(dirPath, 'files', 'archive.gz');

    const rs = createReadStream(fileToCompressPath);
    const ws = createWriteStream(compressedFilePath);

    rs.pipe(zlib.createGzip()).pipe(ws);
};

await compress();