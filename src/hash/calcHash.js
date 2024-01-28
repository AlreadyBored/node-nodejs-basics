import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const calculateHash = async () => {
    const filePath = path.join('src', 'hash', 'files', 'fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);

    stream.on('data', (data) => {
        hash.update(data);
    });

    stream.on('end', () => {
        const fileHash = hash.digest('hex');
        console.log(`SHA256 Hash: ${fileHash}`);
    });

    stream.on('error', (err) => {
        console.error('Error reading the file:', err.message);
    });
};

await calculateHash();