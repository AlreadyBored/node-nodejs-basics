import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const calculateHash = async () => {
    // Write your code here 
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files/fileToCalculateHashFor.txt');
    const fileToCalc = fs.readFile(filePath, 'utf8', (err, data) => {
        if (err || !filePath) {
            console.log('FS operation failed');
            throw new Error('FS operation failed');
        }
        console.log(data);
        const hash = crypto.createHash('sha256');
        hash.update(data);
        const hashValue = hash.digest('hex');
        console.log(hashValue);
    }
    );

};
calculateHash();