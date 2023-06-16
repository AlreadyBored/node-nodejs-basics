import { readFile } from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url'; 
import { createHash } from 'crypto';
import { stdout } from 'process';

const calculateHash = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    try {
        const content = await readFile(pathToFile, 'utf-8');
        const secret = 'abcdefg';
        const hash = createHash('sha256')
            .update(content)
            .digest('hex');
        stdout.write(hash);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await calculateHash();
