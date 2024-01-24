import * as fs from 'fs/promises';
import crypto from 'crypto';
import { join } from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const fileName = 'fileToCalculateHashFor.txt';

const calculateHash = async () => {
    try {
        const content = await fs.readFile(
            join(__dirname, 'files', fileName),
            'utf-8'
        );
        const hash = crypto.createHash('sha256');
        hash.update(content);
        const hex = hash.digest('hex');
        console.log(hex);
    } catch(err) {
        console.log(err.message);
    }
};

await calculateHash();