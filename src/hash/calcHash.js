import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async (filePath) => {
    const readStream = fs.createReadStream(filePath);
    const hash = crypto.createHash('sha256');

    readStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    readStream.on('end', () => {
        const result = hash.digest('hex');
        console.log(`SHA256 хеш файла ${filePath}: ${result}`);
    });

    readStream.on('error', (error) => {
        console.error(`File reading error: ${error.message}`);
    });
};

const filePath = 'src/hash/files/fileToCalculateHashFor.txt';
await calculateHash(filePath)