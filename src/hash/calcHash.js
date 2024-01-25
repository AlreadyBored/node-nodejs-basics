import crypto from 'crypto';
import fs from 'fs/promises';

const calculateHash = async () => {
    // Write your code here

    const path = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);
    const hash = crypto.createHash('sha256');

    const sourceData = await fs.readFile(path);

    hash.update(sourceData);
    const digest = hash.digest('hex');

    console.log(digest);
};

await calculateHash();