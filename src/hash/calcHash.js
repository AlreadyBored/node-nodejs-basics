import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { join } from 'path';

const calculateHash = async () => {
    const filePath = join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const readStream = createReadStream(filePath);

    readStream.on('data', (chunk) => hash.update(chunk));
    readStream.on('end', () => {
        console.log(hash.digest('hex'));
    });
};

await calculateHash();
