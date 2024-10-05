import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';

const calculateHash = async () => {
    const filePath = path.join('files', 'fileToCalculateHashFor.txt'); 
    const hash = createHash('sha256');
    const fileStream = createReadStream(filePath);

    fileStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    fileStream.on('end', () => {
        const fileHash = hash.digest('hex');
        console.log(`SHA256 Hash: ${fileHash}`);
    });

    fileStream.on('error', (err) => {
        console.error('Error occurred:', err);
    });
};

await calculateHash();