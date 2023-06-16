import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

export const calculateHash = async () => {

    try {
        const contentOfFile = await readFile('./src/hash/files/fileToCalculateHashFor.txt');
        const hash = createHash('sha256');
        hash.update(contentOfFile);
        const digest = hash.digest('hex');

       console.log('Hash - ' + digest);

    } catch (error) {
        throw error;
    }
};

calculateHash();