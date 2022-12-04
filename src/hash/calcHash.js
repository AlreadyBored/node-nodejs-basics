import crypto, { createHash } from 'crypto';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const pathFile = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const text = await readFile(pathFile);
    return createHash('sha256').update(pathFile).digest('hex')
};

await calculateHash();