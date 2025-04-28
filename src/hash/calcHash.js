import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const calculateHash = async () => {
    try {
        const fileContent = await readFile(new URL('./files/fileToCalculateHashFor.txt', import.meta.url));
        const hash = createHash('sha256').update(fileContent).digest('hex');
        console.log(hash);
    } catch (error) {
        console.error('Error calculating hash:', error.message);
    }
};

await calculateHash();