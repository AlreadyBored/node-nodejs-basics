import fs from 'fs/promises';
import { createHash } from 'crypto';

export const calculateHash = async () => {
    // You should implement several functions in dedicated files
    // calcHash.js - implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and return it as hex
    const path = (p) => new URL(p, import.meta.url);

    const file = await fs.readFile(path('./files/fileToCalculateHashFor.txt'), 'utf-8');

    return createHash('SHA256').update(file).digest('hex');
};

calculateHash().then(hash => {
    console.log(hash);
});