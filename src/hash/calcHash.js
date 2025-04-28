import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const DIRNAME = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    const filesPath = join(DIRNAME, 'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const stream = createReadStream(filesPath);

    stream.on('error', () => {
        throw new Error('FS operation failed')
    });
    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => console.log(hash.digest('hex')));
};

await calculateHash();
