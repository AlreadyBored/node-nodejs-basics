import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream('./src/hash/files/fileToCalculateHashFor.txt');

    for await (const chunk of stream) {
        hash.update(chunk);
    }

    const digest = hash.digest('hex');
    console.log(`SHA256 hash: ${digest}`);
};

await calculateHash();
