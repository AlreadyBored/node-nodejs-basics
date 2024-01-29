import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'path';

const calculateHash = async () => {
    const file = path.join('src', 'hash', 'files', 'fileToCalculateHashFor.txt');

    const hash = createHash('sha256');

    const input = createReadStream(file);
    input.on('data', (data) => {
        hash.update(data);
    });

    input.on('end', () => {
        console.log(hash.digest('hex'));
    });
};

await calculateHash();