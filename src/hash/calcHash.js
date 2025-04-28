import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const FILE_NAME = 'fileToCalculateHashFor.txt';
const DIR_NAME = 'files';

const calculateHash = async () => {
    const dirName = dirname(fileURLToPath(import.meta.url));
    const filePath = join(dirName, DIR_NAME, FILE_NAME);

    const hash = createHash('sha256');
    const stream = createReadStream(filePath);

    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => console.log(hash.digest('hex')));
    stream.on('error', (err) => console.error('Error:', err.message));
};

await calculateHash();
