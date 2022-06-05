//execute: node src/streams/write
import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';

const toWrite = path.resolve(path.dirname(''), 'src', 'streams', 'files', 'fileToWrite.txt');

export const write = async () => {
    const stream = fs.WriteStream(toWrite, 'utf8');
    const read = process.stdin;
    pipeline(read, stream, ()=>{});
};

write();