import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const input = createReadStream('src/hash/files/fileToCalculateHashFor.txt');
    const hash = createHash('sha256');

    input.pipe(hash).setEncoding('hex');
    hash.on('data', console.log);
};

await calculateHash();