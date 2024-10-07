import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const readStream = createReadStream(filePath);
    const hash = createHash('sha256');

    readStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    readStream.on('end', () => {
        const result = hash.digest('hex');
        console.log(result); 
    });

    readStream.on('error', (err) => {
        console.error('FS operation failed', err);
    });
};

await calculateHash();
