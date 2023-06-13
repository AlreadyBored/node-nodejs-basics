import { createHash } from 'crypto';
import fs from 'fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetFile = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const data = await fs.readFile(targetFile);
    const hash = createHash('sha256')
        .update(data)
        .digest('hex');
    console.log(hash);
};

await calculateHash();