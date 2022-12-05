import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const path = './src/hash/files/fileToCalculateHashFor.txt';

    try {
        const content = await readFile(path, { encoding: 'utf8' });
        const hashValue = createHash('sha256').update(content).digest('hex');
        console.log(hashValue);
    } catch {
        throw new Error('Error');
    }
};

await calculateHash();