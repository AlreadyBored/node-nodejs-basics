import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import zlib from 'node:zlib'

import { getDirPath } from '../utils/getDirPath.js';


const decompress = async () => {
    const dirPath = getDirPath(import.meta.url);
    const fileToDecompressPath = path.join(dirPath, 'files', 'archive.gz');
    const decompressedFilePath = path.join(dirPath, 'files', 'fileToCompress.txt');

    const rs = createReadStream(fileToDecompressPath);
    const ws = createWriteStream(decompressedFilePath);

    rs.pipe(zlib.createUnzip()).pipe(ws);
};

await decompress();