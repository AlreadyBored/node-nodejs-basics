import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const calculateHash = async () => {
    const text = fs.readFileSync(`${__dirname}/files/fileToCalculateHashFor.txt`, "utf8");

    const hash = crypto
        .createHash('sha256')
        .update(text)
        .digest('hex');

    console.log(hash);
};

calculateHash();
