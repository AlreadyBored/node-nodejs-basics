import { readFile } from 'node:fs/promises';
import { fileURLToPath } from "node:url";
import { dirname } from 'node:path';
import { createHash } from 'node:crypto';

const directoryPath = dirname(fileURLToPath(import.meta.url));

export const calculateHash = async () => {

    try {
        const contentOfFile = await readFile(directoryPath + '/files/fileToCalculateHashFor.txt');
        const hash = createHash('sha256');
        hash.update(contentOfFile);
        const digest = hash.digest('hex');

       console.log('Hash - ' + digest);

    } catch (error) {
        throw error;
    }
};

calculateHash();