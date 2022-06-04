import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { pipeline } from 'stream';

const toWrite = path.resolve(path.dirname(''), 'src', 'zip', 'files', 'fileToCompress.txt');
const toRead = path.resolve(path.dirname(''), 'src', 'zip', 'files', 'archive.gz');

export const decompress = async () => {
    const input = fs.createReadStream(toRead);
    const output = fs.createWriteStream(toWrite);
    const unzip = zlib.createUnzip(); 

    input.pipe(unzip).pipe(output);
};

decompress();