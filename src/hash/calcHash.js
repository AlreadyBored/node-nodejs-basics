import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const FILE_NAME = "fileToCalculateHashFor.txt";
const DIR = "files";

const calculateHash = async () => {
    const filePath = path.join(__dirname, DIR, FILE_NAME);
    const hash = crypto.createHash('sha256');
    const fileStream = fs.createReadStream(filePath);

    fileStream.on('data', (data) => {
        hash.update(data);
    });

    fileStream.on('end', () => {
        const hexHash = hash.digest('hex');
        console.log(`SHA256 Hash: ${hexHash}`);
    });

    fileStream.on('error', (err) => {
        console.error(`Error reading file: ${err.message}`);
    });
};

await calculateHash();