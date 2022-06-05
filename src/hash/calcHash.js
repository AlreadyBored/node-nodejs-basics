import fs from 'fs';
import crypto from 'crypto';

export const calculateHash = async () => {
    const fileBuffer = await fs.readFileSync("./src/hash/files/fileToCalculateHashFor.txt");
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);

    const hex = hashSum.digest('hex');

    console.log(hex);
};

calculateHash();