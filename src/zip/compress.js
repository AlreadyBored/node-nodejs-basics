import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { pipeline } from 'stream';

const toRead = path.resolve(path.dirname(''), 'src', 'zip', 'files', 'fileToCompress.txt');
const toWrite = path.resolve(path.dirname(''), 'src', 'zip', 'files', 'archive.gz');

export const compress = async () => {
    const input = fs.ReadStream(toRead, 'utf8');
    const output = fs.WriteStream(toWrite, 'utf8');
    const gzip = zlib.Gzip();

    pipeline(input, gzip, output, ()=>{});
};

compress();