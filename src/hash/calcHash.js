import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { join } from 'path';

const calculateHash = async () => {
    const filesPath = join('files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const stream = createReadStream(filesPath);

    stream.on('error', () => {
        throw new Error('FS operation failed')
    });
    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => console.log(hash.digest('hex')));
};

await calculateHash();
