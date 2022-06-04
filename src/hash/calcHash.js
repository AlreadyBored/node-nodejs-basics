import crypto from 'crypto';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
    const data = await fs.readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    const hex = crypto.createHash('sha256').update(data).digest('hex');

    console.log(hex);
};