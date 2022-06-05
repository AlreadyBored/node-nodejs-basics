import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import crypto from 'crypto'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    fs.readFile(filePath, (err, data) => {
        if(err) throw err;
        const hashSum = crypto.createHash('sha256');
        hashSum.update(data);
        const hex = hashSum.digest('hex');
        console.log(hex);
    });
};

calculateHash();
