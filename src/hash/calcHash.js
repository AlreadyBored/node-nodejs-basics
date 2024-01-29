import fs from 'fs';
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files','fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);

    stream.on('data', (chunk) => {
        hash.update(chunk);
    });

    stream.on('end', () => {
        const hashHex = hash.digest('hex');
        console.log(`SHA256 Hash of file: ${hashHex}`);
    });

    stream.on('error', (error) => {
        console.error(`Error reading file: ${error.message}`);
    });
};

await calculateHash();