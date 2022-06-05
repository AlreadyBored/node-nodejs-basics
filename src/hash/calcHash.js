import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

export const calculateHash = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    try {
        const data = await readFile(resolve(__dirname, 'files', 'fileToCalculateHashFor.txt'));
        const hash = createHash('sha256').update(data).digest('hex');
        console.log(hash);
    } catch (e) {
        console.error(e);
    }
};

calculateHash();
