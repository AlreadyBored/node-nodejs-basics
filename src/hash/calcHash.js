import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const calculateHash = async () => {
    try {
        const filePath = path.join(dirname, 'files', 'fileToCalculateHashFor.txt');
        const text = fs.readFileSync(filePath);
        const hash = crypto.createHash('sha256');
        hash.update(text);
        console.log(hash.digest('hex'));
    } catch (error) {
        throw new error
    }
};

await calculateHash();
