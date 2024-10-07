import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    const file = path.join(__dirname, 'files','fileToCalculateHashFor.txt');
    if (!fs.existsSync(file)) {
        throw new Error('FS operation failed');
    }
    const hash = crypto.createHash('sha256');


};

await calculateHash();