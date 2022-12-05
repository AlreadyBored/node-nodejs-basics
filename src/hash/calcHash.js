const { createHash } = await import('crypto');
import { readFile } from 'fs/promises';

const calculateHash = async () => {
    const file = './src/hash/files/fileToCalculateHashFor.txt';

    try {
        const data = await readFile(file, { encoding: 'utf8' });
        const hash = createHash('sha256').update(data).digest('hex');
        console.log(hash);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await calculateHash();
